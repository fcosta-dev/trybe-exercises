const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const nomeEntregador = order.order.delivery.deliveryPerson;
  const nomeCliente = order.name;
  const telefoneCliente = order.phoneNumber;
  const enderecoCliente = order.address.street;
  const numEndCliente = order.address.number;
  const complementoNumEndCliente = order.address.apartment
  console.log(`Olá ${nomeEntregador}, entrega para: ${nomeCliente}, Telefone: ${telefoneCliente}, R. ${enderecoCliente}, Nº: ${numEndCliente}, AP: ${complementoNumEndCliente}`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  // Modifique o nome da pessoa compradora.
  // Modifique o valor total da compra para R$ 50,00.
}

orderModifier(order);



