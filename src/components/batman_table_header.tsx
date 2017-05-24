import * as React from 'react';


interface BatmanTableHeaderProps extends React.Props<BatmanTableHeader>{
    columns: string[];
}

export class BatmanTableHeader extends React.Component<BatmanTableHeaderProps, void> {
    public render() {
        return (
            <thead>
                <tr>
                    { this.props.columns.map((column, i) =>
                        <th key={i}>{column}</th>
                    )}
                </tr>
            </thead>
        );
    }
}
