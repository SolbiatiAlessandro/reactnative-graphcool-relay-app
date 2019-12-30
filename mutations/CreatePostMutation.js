import {graphql, commitMutation} from 'react-relay';

const mutation = graphql`
	mutation CreatePostMutation($input: CreatePostInput!){
	  createPost(input: $input) {
		post{
		  id
		}
	  }
}`;

function createPostCommit(
  environment,
  _description,
  _imageUrl,
) {
  console.log("calling mutation")
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
		  input: {
			  description: _description, 
			  imageUrl: _imageUrl,
			  clientMutationId: '10'
		  },
      },
    }
  );
}

export default {createPostCommit};
