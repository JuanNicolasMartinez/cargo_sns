# Tables

## users:
- id
- name: string
- email: string unique
- password: string
- company_id: id foreign:companies.id
- created_at: timestamp
- updated_at: timestamp

## user_types:
- id
- name: string
- created_at: timestamp
- updated_at: timestamp

## type_user:
- user_id: id foreign:users.id
- type_id: id foreign:user_types.id

## companies:
- id
- busness_name: string
- address: string
- created_at: timestamp
- updated_at: timestamp

## company_user:
- user_id: id foreign:users.id
- company_id: id foreign:companies.id

## products:
- id
- name: string
- stock: biginteger
- cost: decimal:10,2
- volume: decimal:10,2
- weight: decimal:10,2
- company_id: id foreign:companies.id
- created_at: timestamp
- updated_at: timestamp

## product_characteristics
- id
- name: string
- created_at: timestamp
- updated_at: timestamp

## product_product_characteristics:
- product_id: id foreign:products.id
- product_characteristic_id: id foreign:product_characteristics.id

## drivers:
- id
- user_id: id foreign:users.id
- license: string unique
- license_type: string nullable
- license_expiration_date: date
- created_at: timestamp
- updated_at: timestamp

## vehicles:
- id
- user_id: id foreign:users.id
- license_plate: string unique
- vehicle_type: string
- owner_identification: string
- owner: string
- capacity: decimal:10,2
- created_at: timestamp
- updated_at: timestamp

## warehouses:
- id
- company_id: id foreign:companies.id
- address: string
- capacity: string
- type: string nullable
- status: enum:free,halb_capacity,full
- created_at: timestamp
- updated_at: timestamp