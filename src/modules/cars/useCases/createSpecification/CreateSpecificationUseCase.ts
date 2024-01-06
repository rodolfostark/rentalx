import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    private specificationRepository: ISpecificationsRepository;
    constructor(specificationRepository: ISpecificationsRepository) {
        this.specificationRepository = specificationRepository;
    }
    execute({ name, description }: IRequest): void {
        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export default CreateSpecificationUseCase;
