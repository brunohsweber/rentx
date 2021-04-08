import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { AppError } from "@shared/errors/AppError";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  list(): Promise<Specification[]> {
    throw new Error("Method not implemented.");
  }
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return specifications;
  }
}

export { SpecificationsRepositoryInMemory };
