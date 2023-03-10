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

"""
    name: String,
    password: String,
    email: String,
    cnpj: String,
    phone: String,
    address: String,
"""

# write a json object with the above fields
pl = "{\"name\": \"joao\", \"password\": \"123\", \"email\": \"aaa\", \"cpf\": \"123\", \"phone\": \"123\"}"
pl1 = "{\"name\": \"joao\", \"password\": \"123\", \"email\": \"aaa\", \"cnpj\": \"123\", \"phone\": \"123\", \"address\": \"123\"}"


# print(pl)

# conn.request("POST", "/cadastro/cliente", pl, headers)
# print(conn.getresponse().read().decode("utf-8"))

conn.request("GET", "/", pl, headers)
print(conn.getresponse().read().decode("utf-8"))

conn.request("POST", "/cadastro/petshop", pl1, headers)
print(conn.getresponse().read().decode("utf-8"))

conn.request("GET", "/petshops", pl, headers)
print(conn.getresponse().read().decode("utf-8"))



