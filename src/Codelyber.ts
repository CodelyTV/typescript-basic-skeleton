export class Codelyber {
	private readonly GREETING = "Hi";

	constructor(private readonly name: string) {}

	greet(): string {
		return `${this.GREETING} ${this.name} from Codely TypeScript Basic Skeleton!`;
	}
}
