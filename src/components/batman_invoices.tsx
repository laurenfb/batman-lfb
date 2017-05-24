import * as React from 'react';
import { Badge, Button } from 'react-bootstrap'
import { BatmanSectionHeader } from './batman_section_header'
import { BatmanTable } from './batman_table'
import { BatmanTableHeader } from './batman_table_header'
import { BatmanTableRow } from './batman_table_row'


//interface BatmanInvoicesProps extends React.Props<BatmanInvoices>{
//    title: string;
//}
//
//export class BatmanInvoices extends React.Component<BatmanInvoicesProps, void> {
export const BatmanInvoices = React.createClass({
    getInitialState() {
        return { show: false };
    },

    toggle() {
        this.setState({ show: !this.state.show });
    },

    render() {
        let invoice_columns = ['ID', 'User ID', 'Created', 'Type', 'Status', 'Due', 'Obfuscated ID',
            'Currency', 'Extra Info', 'Bill Strategy', 'Bill Attempts', 'Last Attempt', 'Next Charge',
            'Name', 'Address', 'City', 'Zip', 'Country', 'Corp Entity', 'Exclusion Type', 'Exclusion ID',
            'Jurisdiction ID', 'Tax Plan ID', 'Tax System ID', 'Tax System Result'
        ];

        let invoices = [
            ['124', '151', '2016-02-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-02-10 01:18:15', '62PAKI2AVRXJM', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['125', '151', '2016-03-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-03-10 01:18:15', 'GH6FBHYFB8D2E', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['126', '151', '2016-04-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-04-10 01:18:15', '6CE9BP48ZN8AW', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['127', '151', '2016-05-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-05-10 01:18:15', 'X4L6NGJDLHQ9', 'EUR', '', '200', '2', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['128', '151', '2016-06-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-06-10 01:18:15', 'I7CEYWMCFZ4E', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['129', '151', '2016-07-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-07-10 01:18:15', 'HJTAC4UTI6GB', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['130', '151', '2016-08-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-08-10 01:18:15', 'TYADPMLXF128', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['131', '151', '2016-09-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-09-10 01:18:15', 'VBCMLKQWTFMQ', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['132', '151', '2016-10-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-10-10 01:18:15', 'VP8PXNG4HUWF', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['133', '151', '2016-11-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-11-10 01:18:15', 'WLJLWRJF8766', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['134', '151', '2016-12-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2016-12-10 01:18:15', 'KC2NT4NZJDD4', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['135', '151', '2017-01-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2017-01-10 01:18:15', '185LCVMKMZRK', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
            ['136', '151', '2017-02-10 01:18:15', 'INITIAL_PAYMENT', 'CLOSED', '2017-02-10 01:18:15', 'C31K353WWQDB', 'EUR', '', '200', '1', '2017-02-10 01:18:15', '2017-02-10 01:18:15', '', '', '', '', '12345', 'SE', 'DROPBOX_IRELAND', '', '', 'SE', 'SE', 'SIMPLE_TAX'],
        ];

        if(this.state.show) {
            return (
                <div>
                    <BatmanSectionHeader title="Invoices" />
                    <BatmanTable>
                        <BatmanTableHeader columns={invoice_columns} />
                        <tbody>
                            <tr>
                                <td colSpan={25}><Button bsSize="xsmall" onClick={this.toggle}>Hide Old Invoices</Button></td>
                            </tr>
                            { invoices.map((invoice, i) =>
                                <BatmanTableRow index={i} data={invoice} />
                            )}
                        </tbody>
                    </BatmanTable>
                </div>
            );
        } else {
            return (
                <div>
                    <BatmanSectionHeader title="Invoices" />
                    <BatmanTable>
                        <BatmanTableHeader columns={invoice_columns} />
                        <tbody>
                            <tr>
                                <td colSpan={25}>Hidden Invoices: <Badge>11</Badge> &nbsp;&nbsp;&nbsp;&nbsp;<Button bsSize="xsmall" onClick={this.toggle}>Show</Button></td>
                            </tr>
                            <BatmanTableRow index={0} data={invoices[11]} />
                            <BatmanTableRow index={2} data={invoices[12]} />
                        </tbody>
                    </BatmanTable>
                </div>
            );
        }
    }
});
