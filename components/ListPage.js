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
import {graphql, createFragmentContainer} from 'react-relay'

/* no flux
type Props = {
	allPosts: ListPage_posts
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
	const allPosts = this.props.posts.allPosts
    return (
      <View style={styles.container}>

        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <CreatePage
		    environment={this.props.environment}
            onComplete={() => {
              //this.props.allPostsQuery.refetch()
              this.setState({modalVisible: false})
          }}/>
        </Modal> 

        <FlatList
          enableEmptySections={true}
		  // call this like <ListPage posts={queryresult}/>
          data={allPosts.edges}
		  // key here is edge.node.id
          renderItem={({item: edge}) => (
            <Post
              post={edge.node}
            />
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


export default createFragmentContainer(
  ListPage,
  {
    posts: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<PropName>'
	  # maybe on User ?
      fragment ListPage_posts on Viewer {
		allPosts(last: 100, orderBy: description_DESC) {
          edges {
            node {
              id,
              ...Post_post
            },
          },
        },
      }
    `,
  },
);
