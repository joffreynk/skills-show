export const getUserQuery = `
  query GetUser($email: string!){
    user(by: {email: $email}){
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
    }
  }
`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!){
    userCreate(input: $input){
      user{
        id
        name
        email
        description
        avatarUrl
        githubUrl
        linkedinUrl
      }
    }
  }
`;