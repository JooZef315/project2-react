import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    };
  }

  render(){
    const HomePage = () => {
     return(
         <Home />
       );
     }
    return (
      <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;






















// import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent';
// import {DISHES} from '../shared/dishes';
// import DishDetail from './DishdetailComponent';
//
// class Main extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       selectedDish: null,
//       dishes: DISHES
//     };
//   }
//   onDishSelect(dishId) {
//        this.setState({ selectedDish: dishId});
//    }
//
//
//   render(){
//   return (
//     <div>
//     <Navbar primary color="dark">
//       <div className="container">
//         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//       </div>
//     </Navbar>
//         <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
//     </div>
//   );
//   }
// }
//
// export default Main;
