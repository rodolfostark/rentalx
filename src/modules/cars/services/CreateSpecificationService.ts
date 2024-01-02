interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    private specificationRepository: ISpecificationRepository;
    constructor(specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    execute() {
        console.log("TODO");
    }
}

export default CreateSpecificationService;
