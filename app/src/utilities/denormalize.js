
export function denormalizeTrainer(flat) {
  return {
    color: flat.color,
    birthDate: flat.birthDate,
    contact: denormalizeContact(flat),
    clients: flat.clients,
    credentials: {
      password: flat.password,
      role: flat.role
    }
  }
}


export function denormalizeContact(flat) {
  return {
    firstName: flat.firstName,
    lastName: flat.lastName,
    email: flat.email,
    secondaryPhone: flat.secondaryPhone,
    mobilePhone: flat.mobilePhone,
    address: {
      street1: flat.street1,
      street2: flat.street2,
      city: flat.flat,
      state: flat.state,
      zipCode: flat.zipCode
    }
  }
}
