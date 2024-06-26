const ordersData = [
  {
    orderNumber: "ORD002",
    supplierCustomer: "XYZ Customer",
    origin: "Origin B",
    destination: "Destination Y",
    product: "Product 2",
    status: "Completed",
    id: 2,
    totalMass: 800,
    deliveries: [
      {
        origin: "Origin B",
        destination: "Destination Y",
        netMass: 400,
        dateTime: "2023-11-25T09:45:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin B",
        destination: "Destination Y",
        netMass: 400,
        dateTime: "2023-11-27T11:20:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
    ],
  },
  {
    orderNumber: "ORD003",
    supplierCustomer: "ABC Inc.",
    origin: "Origin C",
    destination: "Destination Z",
    product: "Product 3",
    status: "Pending",
    id: 3,
    totalMass: 1200,
    deliveries: [
      {
        origin: "Origin C",
        destination: "Destination Z",
        netMass: 600,
        dateTime: "2023-12-02T14:30:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin C",
        destination: "Destination Z",
        netMass: 300,
        dateTime: "2023-12-03T10:15:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin C",
        destination: "Destination Z",
        netMass: 100,
        dateTime: "2023-12-04T11:45:00Z",
        status: "Pending",
        driver: "Isaiah Chiraira",
      },
    ],
  },
  {
    orderNumber: "ORD004",
    supplierCustomer: "PQR Suppliers",
    origin: "Origin D",
    destination: "Destination W",
    product: "Product 4",
    status: "Completed",
    id: 4,
    totalMass: 600,
    deliveries: [
      {
        origin: "Origin D",
        destination: "Destination W",
        netMass: 300,
        dateTime: "2023-12-01T08:00:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin D",
        destination: "Destination W",
        netMass: 300,
        dateTime: "2023-12-02T10:30:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
    ],
  },
  {
    orderNumber: "ORD005",
    supplierCustomer: "MNO Enterprises",
    origin: "Origin E",
    destination: "Destination V",
    product: "Product 5",
    status: "Pending",
    id: 5,
    totalMass: 1000,
    deliveries: [
      {
        origin: "Origin E",
        destination: "Destination V",
        netMass: 500,
        dateTime: "2023-11-28T09:00:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin E",
        destination: "Destination V",
        netMass: 200,
        dateTime: "2023-11-30T11:00:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin E",
        destination: "Destination V",
        netMass: 300,
        dateTime: "2023-12-02T14:30:00Z",
        status: "Pending",
        driver: "Isaiah Chiraira",
      },
    ],
  },
  {
    orderNumber: "ORD006",
    supplierCustomer: "LMN Corporation",
    origin: "Origin F",
    destination: "Destination U",
    product: "Product 6",
    status: "Completed",
    id: 6,
    totalMass: 900,
    deliveries: [
      {
        origin: "Origin F",
        destination: "Destination U",
        netMass: 450,
        dateTime: "2023-12-05T09:30:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
      {
        origin: "Origin F",
        destination: "Destination U",
        netMass: 450,
        dateTime: "2023-12-07T11:45:00Z",
        status: "Completed",
        driver: "Isaiah Chiraira",
      },
    ],
  },
];

export default ordersData;
