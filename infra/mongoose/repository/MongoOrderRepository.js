class MongoOrderRepository {
	constructor(order, throwError) {
		this.Order = order;
		this.throwError = throwError;
	}

	async createOrder(args) {
		try {
			let order = new this.Order(args);
			let result = await order.save();
			return result;
		} catch (error) {
			this.throwError(error, 'creating the new order');
		}
	}

	async isOrder(sid) {
		try {
			let result = await this.Order.exists({ sid: sid });
			if (!result) {
				return false;
			}
			return result;
		} catch (error) {
			this.throwError(error, 'checking if order exists');
		}
	}

	async updateOrder(args) {
		let { orderId, f, v } = args;
		const update = { [f]: v };
		try {
			let result = await this.Order.findByIdAndUpdate(orderId, update, {
				new: true,
			});
			console.log(result);
			return result;
		} catch (error) {
			this.throwError(error, 'while updating the order');
		}
	}

	async deleteOrder(orderId) {
		try {
			let result = await this.Order.delete(orderId);
			console.log(`order ${orderId} deleted successfully`);
			return result;
		} catch (error) {
			this.throwError(error);
		}
	}

	async listOrders(query = {}) {
		const { f, v } = query;
		try {
			let orders = await this.Order.find({ [f]: v });
			if (!orders || orders.length === 0) {
				return false;
			}
			return orders;
		} catch (error) {
			this.throwError(error);
		}
	}
}

module.exports = MongoOrderRepository;
