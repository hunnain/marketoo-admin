export interface AllReimbursements {
  reimbursements: [Reimbursement];
}

export interface Reimbursement {
  reimbursementTitle: string;
  reimbursementId: string;
  reimbursementCode: string;
  startDate: Date;
  endDate: Date;
  allowFreeShipping: boolean;
  quantity: number;
  discountType: string;
  percentageDiscount: number;
  category: string;
  subCategory: string;
  extendedSubCategory: string;
  minSpend: number;
  maxSpend: number;
  perLimit: number;
  perCustomer: number;
  sellerId: string;
  seller?: any;
}
