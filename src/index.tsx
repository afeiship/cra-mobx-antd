import React from 'react';
import ReactDOM from 'react-dom';
import '@/shared/nx';
import '@/assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import App from './app';

// const App = () => {
//   console.log('app ready.');
//   return (
//     <View debug p={10} bg="#eee" plugin="transform-center:xy">
//       Hello React <View as="strong">{nx.$root.hello}</View> <br />
//       Hello Nx {nx.VERSION}
//     </View>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
