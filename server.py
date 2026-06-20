import http.server
import socketserver
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Silence normal file retrieval requests to keep console clean
        if "GET" in args[0] and (args[1] == '200' or args[1] == '304'):
            return
        super().log_message(format, *args)

def main():
    # Adjust directory
    os.chdir(DIRECTORY)
    
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"==================================================")
            print(f" Life Navigator AI - Development Server Launched")
            print(f" Serving workspace files from: {DIRECTORY}")
            print(f" Application link: http://localhost:{PORT}")
            print(f" Press Ctrl+C to terminate server")
            print(f"==================================================")
            sys.stdout.flush()
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server] Shutdown request received. Exiting.")
    except Exception as e:
        print(f"\n[Server] Error occurred: {e}")

if __name__ == "__main__":
    main()
