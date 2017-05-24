import * as React from 'react';


interface BatmanHeaderProps extends React.Props<BatmanHeader>{
    title: string;
}

export class BatmanHeader extends React.Component<BatmanHeaderProps, void> {
    render() {
        return (
            <h1 className="batman-header">{this.props.title}</h1>
        );
    }
}
