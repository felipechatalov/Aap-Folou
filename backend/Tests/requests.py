import http.client

conn = http.client.HTTPConnection("localhost:6969")
headers = { 'Content-Type': "application/json" }

"""
    name: String,
    password: String,
    email: String,
    cpf: String,
    phone: String

"""
# write a json object with the above fields
pl = "{\"name\": \"joao\", \"password\": \"123\", \"email\": \"aaa\", \"cpf\": \"123\", \"phone\": \"123\"}"

print(pl)

conn.request("POST", "/cadastro/cliente", pl, headers)
print(conn.getresponse().read().decode("utf-8"))

conn.request("GET", "/", pl, headers)


