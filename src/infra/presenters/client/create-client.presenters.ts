interface CreateClientBaseDto {
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
}

export interface CreateClientInputDto extends CreateClientBaseDto {}

export interface CreateClientOutputDto extends CreateClientBaseDto {}
