import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Alert, Overlay, OverlayTrigger, Popover, Table } from 'react-bootstrap'
import { BatmanSectionHeader } from './batman_section_header'
import { BatmanTable } from './batman_table'
import { BatmanTableHeader } from './batman_table_header'


const CustomPopover = React.createClass({
    render() {
        return (
            <div style={{
                       position: 'absolute',
                       backgroundColor: '#FFF',
                       boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                       border: '1px solid #CCC',
                       borderRadius: 5,
                       marginLeft: 10,
                       marginTop: -15,
                       padding: 10,
                    }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>address_country</td>
                            <td>Sweden</td>
                        </tr>
                        <tr>
                            <td>address_postal</td>
                            <td>12345</td>
                        </tr>
                        <tr>
                            <td>credit_type</td>
                            <td>amex</td>
                        </tr>
                        <tr>
                            <td>credit_number_last4</td>
                            <td>4444</td>
                        </tr>
                        <tr>
                            <td>credit_expiring_month</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>credit_expiring_year</td>
                            <td>2030</td>
                        </tr>
                        <tr>
                            <td>credit_bin</td>
                            <td>3444</td>
                        </tr>
                        <tr>
                            <td>credit_verification_id</td>
                            <td>446E2BA8322FDA9B</td>
                        </tr>
                        <tr>
                            <td>braintree_customer_id</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>braintree_card_token</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>braintree_credit_unique_number_id</td>
                            <td>259403805</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    },
});


//interface BatmanBillingInstrumentsProps extends React.Props<BatmanBillingInstruments>{
//    title: string;
//}

//export class BatmanBillingInstruments extends React.Component<BatmanBillingInstrumentsProps, void> {
export const BatmanBillingInstruments = React.createClass({
    getInitialState() {
        return { found: true, click: false, hover: false, show: false };
    },


    alertToggle() {
        this.setState({ found: !this.state.found, click: this.state.click, hover: this.state.hover, show: this.state.show });
    },

    mouseOver() {
        //console.log('MOUSEOVER: click: ', this.state.click, ' hover: ', this.state.hover, ' show: ', this.state.show);
        this.setState({ found: true, click: this.state.click, hover: true, show: true });
    },

    mouseOut() {
        //console.log('MOUSEOUT: click: ', this.state.click, ' hover: ', this.state.hover, ' show: ', this.state.show);
        this.setState({ found: true, click: this.state.click, hover: false, show: this.state.click });
    },

    toggle() {
        //console.log('TOGGLE: click: ', this.state.click, ' hover: ', this.state.hover, ' show: ', this.state.show);
        this.setState({ found: true, click: !this.state.click, hover: this.state.hover, show: !this.state.click || this.state.hover });
    },

    hide() {
        //console.log('HIDE: click: ', this.state.click, ' hover: ', this.state.hover, ' show: ', this.state.show);
        this.setState({ found: true, click: !this.state.click, hover: this.state.hover, show: !this.state.click || this.state.hover});
    },

    render() {
        if (this.state.found) {
            let instrument_columns = [ 'ID', 'Team ID', 'Gateway', 'Gateway Key', 'Type', 'Inactive', 'Created', 'Updated', 'Deleted' ];

            //console.log('RENDER: click: ', this.state.click, ' hover: ', this.state.hover, ' show: ', this.state.show);
            //const click = this.state.click ? "True" : 'False'
            //const hover = this.state.hover ? "True" : 'False'
            //const show = this.state.show ? "True" : 'False'
            //        click: {click}<br />
            //        hover: {hover}<br />
            //        show: {show}<br />
            return (
                <div>
                    <div onClick={this.alertToggle}>
                        <BatmanSectionHeader title="Billing Instruments"/>
                    </div>
                    <BatmanTable>
                        <BatmanTableHeader columns={instrument_columns}/>
                        <tbody>
                            <tr ref="target" onClick={this.toggle} onMouseOver={this.mouseOver}
                                onMouseOut={this.mouseOut}>
                                <td>87</td>
                                <td><a href="https://meta-dbdev.dev.corp.dropbox.com/admin/batman/team/63/view">63</a></td>
                                <td>Braintree</td>
                                <td>1-1</td>
                                <td>INSTRUMENT_TYPE_CREDIT_CARD</td>
                                <td></td>
                                <td>2017-02-10 01:18:15</td>
                                <td></td>
                                <td>2017-02-10 01:18:15</td>
                            </tr>
                        </tbody>
                    </BatmanTable>
                    <Overlay container={this}
                             rootClose={this.state.click}
                             onHide={() => this.hide()}
                             placement="bottom"
                             show={this.state.show}
                             target={() => ReactDOM.findDOMNode(this.refs.target)}>
                        <CustomPopover />
                    </Overlay>
                </div>
            );
        } else {
            return (
                <div>
                    <div onClick={this.alertToggle}>
                        <BatmanSectionHeader title="Billing Instruments"/>
                    </div>
                    <Alert bsStyle="danger">
                        <h4>No billing instrument found!</h4>
                        This team doesn't have a billing instrument and will fail rebill.
                    </Alert>
                </div>
            );
        }
    }
});
