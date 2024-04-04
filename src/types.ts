export interface Root {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }

  export type cartItem ={
  id:number
  qty:number
  price:number
  name:string
  img:string
  }

export type newUserType ={
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    accessToken: string;

}

  export interface stripeObjectType {
    id: string
    object: string
    after_expiration: any
    allow_promotion_codes: any
    amount_subtotal: number
    amount_total: number
    automatic_tax: AutomaticTax
    billing_address_collection: any
    cancel_url: string
    client_reference_id: any
    client_secret: any
    consent: any
    consent_collection: any
    created: number
    currency: string
    currency_conversion: any
    custom_fields: any[]
    custom_text: CustomText
    customer: any
    customer_creation: string
    customer_details: any
    customer_email: any
    expires_at: number
    invoice: any
    invoice_creation: InvoiceCreation
    livemode: boolean
    locale: any
    metadata: Metadata2
    mode: string
    payment_intent: any
    payment_link: any
    payment_method_collection: string
    payment_method_configuration_details: any
    payment_method_options: PaymentMethodOptions
    payment_method_types: string[]
    payment_status: string
    phone_number_collection: PhoneNumberCollection
    recovered_from: any
    setup_intent: any
    shipping_address_collection: any
    shipping_cost: any
    shipping_details: any
    shipping_options: any[]
    status: string
    submit_type: any
    subscription: any
    success_url: string
    total_details: TotalDetails
    ui_mode: string
    url: string
  }
  
  export interface AutomaticTax {
    enabled: boolean
    liability: any
    status: any
  }
  
  export interface CustomText {
    after_submit: any
    shipping_address: any
    submit: any
    terms_of_service_acceptance: any
  }
  
  export interface InvoiceCreation {
    enabled: boolean
    invoice_data: InvoiceData
  }
  
  export interface InvoiceData {
    account_tax_ids: any
    custom_fields: any
    description: any
    footer: any
    issuer: any
    metadata: Metadata
    rendering_options: any
  }
  
  export interface Metadata {}
  
  export interface Metadata2 {}
  
  export interface PaymentMethodOptions {
    card: Card
  }
  
  export interface Card {
    request_three_d_secure: string
  }
  
  export interface PhoneNumberCollection {
    enabled: boolean
  }
  
  export interface TotalDetails {
    amount_discount: number
    amount_shipping: number
    amount_tax: number
  }