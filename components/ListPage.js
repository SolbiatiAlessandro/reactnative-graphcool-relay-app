import React from 'react'
import Post from './Post'
import {
  View,
  TouchableHighlight,
  FlatList,
  Modal,
  StyleSheet,
  Text
} from 'react-native'
import CreatePage from './CreatePage'


/* no flux
type Post{
	id: ID
	description: String!
	imageUrl: String!
}
type Props = {
	posts: Array<Post>
};
*/

class ListPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      user: undefined,
    }

  }

  render () {
    /* how to do this in relay?
	if (this.props.allPostsQuery.loading) {
      return (<Text>Loading</Text>)
    } 
	*/
	console.log(this.props.posts[0].node)
    return (
      <View style={styles.container}>

        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <CreatePage
            onComplete={() => {
              //this.props.allPostsQuery.refetch()
              this.setState({modalVisible: false})
          }}/>
        </Modal> 

        <FlatList
          enableEmptySections={true}
		  // call this like <ListPage posts={queryresult}/>
          data={this.props.posts}
          renderItem={({item: post}) => (this._render_post(post)
          )}
        />
        <TouchableHighlight
          style={styles.createPostButtonContainer}
          onPress={this._createPost}
        >
          <Text style={styles.createPostButton}>Create Post</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _render_post = (post) => {
	  console.log(post)
		  return(
            <Post
              description={post.node.description}
              imageUrl={post.node.imageUrl}
            />);

  }

  _createPost = () => {
    // this.props.router.push('/create');
    this.setState({modalVisible: true})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  createPostButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createPostButton: {
    backgroundColor: 'rgba(39,174,96,1)',
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    height: 60,
    width: 480,
    paddingTop: 18,
  }
})

export default ListPage
