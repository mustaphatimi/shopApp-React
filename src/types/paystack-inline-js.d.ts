declare module '@paystack/inline-js' {
    class PaystackPop {
      constructor();
      newTransaction(options: PaystackOptions): void;
    }
  
    interface PaystackOptions {
      key: string;
      amount: number;
      email: string;
      firstname: string;
      lastname: string;
      metadata: Record<string, any>;
      onSuccess: (transaction: any) => void;
      onCancel: () => void;
    }
  
    export = PaystackPop;
  }
  
  
  
  
  