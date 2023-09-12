import http.server
import socketserver

PORT = 80  # Change this to the port your Docker container is listening on

class FormHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        # Here, you can parse and process the POST data as needed.
        # Replace the following print statement with your logic.
        print("Received form data:")
        print(post_data)

        # Send a response
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Your message has been received!')

with socketserver.TCPServer(("", PORT), FormHandler) as httpd:
    print("Server started at port", PORT)
    httpd.serve_forever()

if __name__ == '__main__':
    print("Python script is running.")
