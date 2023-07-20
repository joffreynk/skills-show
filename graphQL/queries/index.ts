export const getUserQuery = `
  query getUserQuery($email: string!){
    user(by: {email: $email}){
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedInUrl
    }
  }
`;

export const createUserMutation = `
  mutation createUserMutation($input: UserCreateInput!){
    userCreate(input: $input){
      user{
        id
        name
        email
        description
        avatarUrl
        githubUrl
        linkedInUrl
      }
    }
  }
`;