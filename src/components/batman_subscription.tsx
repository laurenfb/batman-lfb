import * as React from 'react';
import { Badge, Button } from 'react-bootstrap'
import { BatmanSectionHeader } from './batman_section_header'
import { BatmanTable } from './batman_table'
import { BatmanTableHeader } from './batman_table_header'
import { BatmanTableRow } from './batman_table_row'
import { BatmanTableRowDiff } from './batman_table_row_diff'


//interface BatmanSubscriptionProps extends React.Props<BatmanSubscription>{
//    title: string;
//}
//
//export class BatmanInvoices extends React.Component<BatmanSubscriptionProps, void> {
export const BatmanSubscription = React.createClass({
    getInitialState() {
        return { show: false };
    },

    toggle() {
        this.setState({ show: !this.state.show });
    },

    render() {
        let invoice_columns = ['ID', 'Auto Renew', 'Created', 'Currency', 'Deactivated', 'Discount Ratio', 'Gateway',
            'Interval End', 'Interval Start', 'Last Rebill Failure', 'Last Rebill Notice Sent', 'Line Item IDs', 'Manual',
            'Next Charge Time', 'Notes', 'Plan ID', 'Price Version', 'Rebill Failures', 'Recently Reduced Licenses', 'Renew Notified', 'Schedule ID',
            'Team Sub History ID', 'Reason'
        ];

        let sub_history = [
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-03-10 01:18:15', '2016-02-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-04-10 01:18:15', '2016-03-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-05-10 01:18:15', '2016-05-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-06-10 01:18:15', '2016-05-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-07-10 01:18:15', '2016-02-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-08-10 01:18:15', '2016-07-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-09-10 01:18:15', '2016-08-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-10-10 01:18:15', '2016-09-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-11-10 01:18:15', '2016-10-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2016-12-10 01:18:15', '2016-11-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2017-01-10 01:18:15', '2016-12-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2017-02-10 01:18:15', '2017-01-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', 'rebill'],
            ['50', 'ON', '2016-02-10 01:18:15', 'EUR', '', '0', 'Braintree', '2017-03-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '', 'Created by User 151', '101', '1', '0', '0', '', '1', '65', ''],
        ];

        if(this.state.show) {
            return (
                <div>
                    <BatmanSectionHeader title="Subscription" />
                    <BatmanTable>
                        <BatmanTableHeader columns={invoice_columns} />
                        <tbody>
                            <tr>
                                <td colSpan={23}><Button bsSize="xsmall" onClick={this.toggle}>Hide History</Button></td>
                            </tr>
                            { sub_history.map((invoice, i) =>
                                <BatmanTableRowDiff index={i} data={invoice} />
                            )}
                        </tbody>
                    </BatmanTable>
                </div>
            );
        } else {
            return (
                <div>
                    <BatmanSectionHeader title="Subscription" />
                    <BatmanTable>
                        <BatmanTableHeader columns={invoice_columns} />
                        <tbody>
                            <tr>
                                <td colSpan={23}><Button bsSize="xsmall" onClick={this.toggle}>Show History</Button></td>
                            </tr>
                            <BatmanTableRow index={0} data={sub_history[12]} />
                        </tbody>
                    </BatmanTable>
                </div>
            );
        }
    }
});
