import React from 'react';
import { Button } from 'antd';

const App = React.createClass({
  getInitialState() {
    return {
      date: ''
    };
  },
  handleChange(value) {
    message.info('您选择的日期是: ' + value.toString());
    this.setState({
      date: value
    });
  },
  render() {
    return <div>
        <Button type="primary">主按钮</Button>
        <Button>次按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
        <Button type="dashed">虚线按钮</Button>
    </div>;
  }
});

export default App;
