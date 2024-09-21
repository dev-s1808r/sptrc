class InterfaceOrder {
	constructor(repository) {
		this.repository = repository;
	}

	async createOrder(args) {
		try {
			const result = await this.repository.createOrder(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}

	async isOrder(args) {
		try {
			const result = await this.repository.isOrder(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}

	async updateOrder(args) {
		try {
			const result = await this.repository.updateOrder(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}

	async deleteOrder(args) {
		try {
			const result = await this.repository.deleteOrder(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}

	async listOrders(args) {
		try {
			const result = await this.repository.listOrders(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}

	async findOneAndUpdate(args) {
		try {
			const result = await this.repository.findOneAndUpdate(args);
			return result;
		} catch (error) {
			console.log('error in order data access repo', error.message);
			throw error;
		}
	}
}

module.exports = InterfaceOrder;
