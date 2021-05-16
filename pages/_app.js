import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import PageLoading from '../components/common/PageLoading';
import Router from 'next/router';

import dynamic from 'next/dynamic';

class MyApp extends App {

  state = {
    loading: false
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  stopLoading = () => {
    this.setState({
      loading: false
    })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading);
    Router.events.on('routeChangeComplete', this.stopLoading);
    Router.events.on('routeChangeError', this.stopLoading);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading);
    Router.events.off('routeChangeComplete', this.stopLoading);
    Router.events.off('routeChangeError', this.stopLoading);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {this.state.loading ? <PageLoading /> : null}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp;