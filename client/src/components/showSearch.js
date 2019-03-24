import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/footer';
const styles = {

  card: {
    maxWidth: 300,


  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class SearchShow extends React.Component {
  
  
  render() {
    const { classes } = this.props;



    return (
        <div>
    <Header/>
      <br/><br/>
      <div class="container">
        <div class="row">
        
          {this.props.todos.data.map((user) => {

            return <div key={user._id} >
              <div class="col-sm-12">

                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      className={classes.media}
                      height="300"
                     
                      image={"http://localhost:8000/" + user.photoname}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {user.productName}
                      </Typography>
                     
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={'/detailrouter/'+user._id}>
                    <Button size="small" color="primary">
                     Detail
        </Button>
        </Link>
        <Typography component="p">
                       Price  {user.price}
                      </Typography>
                  </CardActions>

                </Card>
<br/>
              </div>
            
          
            </div>




          })}

        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}










const mapStateToProps = state => ({ todos: state.searchReducers })
 
  const showsearchCatigories = connect(mapStateToProps)(SearchShow);
  showsearchCatigories.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)( showsearchCatigories);
 