import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import * as TodoActions from '../../actions/todos';
import MainSection from '../../components/MainSection';

import { BatmanBillingInstruments } from '../../components/batman_billing_instruments'
import { BatmanHeader } from '../../components/batman_header'
import { BatmanInvoices } from '../../components/batman_invoices'
import { BatmanSectionHeader } from '../../components/batman_section_header'
import { BatmanSubscription } from '../../components/batman_subscription'
import { BatmanTable } from '../../components/batman_table'
import { BatmanTableHeader } from '../../components/batman_table_header'
import { TeamInfo } from '../../components/team_info'

interface AppProps {
  todos: TodoItemData[];
  actions: typeof TodoActions;
};

interface AppState {
  /* empty */
}

class App extends React.Component<AppProps, AppState>{
    render() {
        const { todos, actions, children } = this.props;
        let invoice = [ 'ID', 'Test 2', 'Test 3', 'Test 4' ];
        return (
            <div style={{padding: 10}}>
                <BatmanHeader title="Team Cash Data Report" />
                <TeamInfo />
                <BatmanBillingInstruments />
                <BatmanInvoices />
                <BatmanSubscription />
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
