import { IspecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: IspecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };