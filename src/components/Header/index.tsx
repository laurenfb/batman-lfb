import * as React from 'react';
import TodoTextInput from '../TodoTextInput';

interface HeaderProps {
  addTodo: (todo: TodoItemData) => any;
}

interface HeaderState {
  /* empty */
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props?: HeaderProps, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ text });
    }
  }

  render() {
    return (
      <header>
        <h1>Team Cash Data Report</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be?" />
      </header>
    );
  }
}

export default Header;
