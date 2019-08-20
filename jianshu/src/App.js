import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable'; 
import Login from './pages/login';
import PostArticle from './pages/PostArticle';
import store from './store';

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Route path='/' exact component={Home}></Route>
					<Route path='/login' exact component={Login}></Route>
					<Route path='/detail/:id' exact component={Detail}></Route>
					<Route path='/postarticle' exact component={PostArticle}></Route>
				</BrowserRouter>
			</Provider>
		</Fragment>
	);
}

export default App;
