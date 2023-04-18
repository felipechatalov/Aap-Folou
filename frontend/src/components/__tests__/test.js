import ClientController from "../Controllers/ClientController";


function TestClientShow(){
    
    const name = "Teste";
    const password = "12345";
    const req = {name, password};
    ClientController.show(req, res);
    
    assert (res.status === 200);
    assert (res.body.name === name);
    assert (res.body.password === password);
    assert (res.body.email === "teste@gmail.com");
    assert (res.body.cpf === "123.456.789-10");
    assert (res.body.phone === "44912345678");
}

TestClientShow();