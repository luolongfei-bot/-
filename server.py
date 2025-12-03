import http.server
import socketserver
import json
import os
import sys

# Configuration
PORT = 8000
DATA_FILE = os.path.join(os.path.dirname(__file__), 'project_data.json')

# Default Data
DEFAULT_DATA = {
    "project": { "name": "未命名项目" },
    "parentModules": [
        { "id": "pm_default", "name": "默认项目模块" }
    ],
    "modules": [
        { "id": "m_1", "name": "核心功能A", "parentId": "pm_default" },
        { "id": "m_2", "name": "核心功能B", "parentId": "pm_default" },
        { "id": "m_3", "name": "核心功能C", "parentId": "pm_default" }
    ],
    "tasks": []
}

class ProjectBoardHandler(http.server.SimpleHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self._set_headers()
            self.wfile.write(json.dumps({'status': 'ok'}).encode('utf-8'))
            return

        if self.path == '/api/data':
            self._set_headers()
            
            if os.path.exists(DATA_FILE):
                try:
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        data = f.read()
                        self.wfile.write(data.encode('utf-8'))
                except Exception as e:
                    print(f"Error reading data: {e}")
                    self.wfile.write(json.dumps(DEFAULT_DATA).encode('utf-8'))
            else:
                # Initialize file if not exists
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(DEFAULT_DATA, f, ensure_ascii=False, indent=2)
                self.wfile.write(json.dumps(DEFAULT_DATA).encode('utf-8'))
            return

        # Serve static files
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path == '/api/data':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                # Basic validation
                if 'project' not in data:
                    raise ValueError("Invalid data structure")
                
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                
                self._set_headers()
                self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
            except Exception as e:
                print(f"Error saving data: {e}")
                self.send_response(500)
                self.end_headers()
            return
            
        self.send_response(404)
        self.end_headers()

import socket

def get_ip_addresses():
    ips = []
    try:
        # Get local machine name
        hostname = socket.gethostname()
        # Get all IP addresses associated with the hostname
        addr_infos = socket.getaddrinfo(hostname, None)
        for info in addr_infos:
            ip = info[4][0]
            if ip not in ips and ':' not in ip: # Filter out IPv6 for simplicity
                ips.append(ip)
    except Exception:
        pass
    return ips

def get_best_ip():
    # Try to determine the primary IP address used for internet connection
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('8.8.8.8', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

def run_server():
    # Change directory to script location to serve files correctly
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = ProjectBoardHandler
    # Allow address reuse to avoid "Address already in use" errors on restart
    socketserver.TCPServer.allow_reuse_address = True
    
    # Bind to 0.0.0.0 to allow external access
    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        best_ip = get_best_ip()
        all_ips = get_ip_addresses()
        
        print(f"\n{'='*50}")
        print(f"🚀 项目协作服务器已启动")
        print(f"{'='*50}")
        print(f"请优先使用此地址 (最可能的局域网IP):")
        print(f"👉 http://{best_ip}:{PORT}/project_board.html")
        print(f"\n其他可能的地址:")
        print(f"- http://localhost:{PORT}/project_board.html")
        for ip in all_ips:
            if ip != best_ip:
                print(f"- http://{ip}:{PORT}/project_board.html")
        
        print(f"\n⚠️ 故障排查:")
        print(f"1. 如果 {best_ip} 无法访问，请尝试列表中的其他 IP")
        print(f"2. 确保 Windows 防火墙已允许 Python 通信")
        print(f"3. 确保手机/其他电脑连接的是同一个 Wi-Fi")
        print(f"{'='*50}\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == '__main__':
    run_server()

