import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import {graphql, createFragmentContainer} from 'react-relay'

/*
type Props = {
	post: Post_post 
}
 */

class Post extends React.Component {

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    Image.getSize(this.imageUrl, (width, height) => {
      const imageHeight =  250
      const scaleFactor = height / imageHeight
      const imageWidth = width / scaleFactor
      this.setState({width: imageWidth, height: imageHeight})
    })
  }

  render () {
    const {width, height} = this.state
	const {description, imageUrl} = this.props.post
	this.imageUrl = imageUrl
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width, height }}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.title}>
          {description}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.07)'
  },
  title: {
    padding: 22,
    color: 'rgba(0,0,0,.8)',
    fontWeight: '300',
    fontSize: 16,
  },
})


export default createFragmentContainer(
  Post,
  // Each key specified in this object will correspond to a prop available to the component
  {
    post: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment Post_post on Post {
        description
        imageUrl
      }
    `
  },
)
