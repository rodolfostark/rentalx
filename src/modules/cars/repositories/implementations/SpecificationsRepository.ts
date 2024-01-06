import Specification from "../../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationsDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];
    constructor() {
        this.specifications = [];
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name,
        );
        return specification;
    }
    create({ name, description }: ICreateSpecificationsDTO): void {
        const specification = new Specification();
        const specificationAlreadyExists = this.findByName(specification.name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
    }
}

export default SpecificationsRepository;
