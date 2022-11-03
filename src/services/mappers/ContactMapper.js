// O mapper vai receber um único objetivo e ira transformar o mesmo
import { notEmptyStringOrDefault, formatPhone } from '../../utils/Formaters'

class ContactMapper {
  constructor() {}

  toPersistence(persistenceContact) {
    return {
      name: persistenceContact.name,
      email: persistenceContact.email,
      phone: persistenceContact.phone,
      category_id: persistenceContact.categoryId,
    }
  }

  toDomain(domainContact) {
    return {
      id: notEmptyStringOrDefault(domainContact.id),
      name: notEmptyStringOrDefault(domainContact.name),
      email: notEmptyStringOrDefault(domainContact.email),
      phone: notEmptyStringOrDefault(formatPhone(domainContact.phone)),
      category: {
        id: notEmptyStringOrDefault(domainContact.category_id),
        name: notEmptyStringOrDefault(domainContact.category_name),
      },
    }
  }
}

export default new ContactMapper()
