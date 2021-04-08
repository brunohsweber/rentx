# Especificações da aplicação

<br/>

## Cadastro de carro:
---

<br/>

### **RF**: Requisitos Funcionais

<br/>

- Deve ser possível cadastrar um novo carro.

<br/>

### **RN**: Regras de Negócio

<br/>

- Não deve ser possível cadastrar um carro com uma placa já existente.

- O carro deve ser cadastrado, por padrão, com disponibilidade.

- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br/>
<br/>

## Listagem de carros:
---

<br/>

### **RF**: Requisitos Funcionais

<br/>

- Deve ser possível listar todos os carros disponíveis.

- Deve ser possível listar todos os carros disponíveis pela categoria.

- Deve ser possível listar todos os carros disponíveis pelo nome da marca.

- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

<br/>

### **RN**: Regras de Negócio

<br/>

- O usuário não precisa estar logado no sistema.

<br/>
<br/>

## Cadastro de especificação no carro:
---

<br/>

### **RF**: Requisitos Funcionais

<br/>

- Deve ser possível cadastrar uma especificação para um carro.

<br/>

### **RN**: Regras de Negócio

<br/>

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.

- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br/>
<br/>

## Cadastro de imagens do carro:
---

<br/>

### **RF**: Requisitos Funcionais

<br/>

- Deve ser possível cadastrar a imagem do carro.

<br/>

### **RNF**: Requisitos Não Funcionais

<br/>

- Utilizar o multer para upload dos arquivos.

<br/>

### **RN**: Regras de Negócio

<br/>

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.

- O usuário responsável pelo cadastro deve ser um usuário administrador.

<br/>
<br/>

## Aluguel de carro:
---

<br/>

### **RF**: Requisitos Funcionais

<br/>

- Deve ser possível cadastrar um aluguel.

<br/>

### **RN**: Regras de Negócio

<br/>

- O aluguel deve ter duração mínima de 24 horas.

- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.

- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

