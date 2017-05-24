import * as React from 'react';


export class TeamInfo extends React.Component<void, void> {
    render() {
        return (
            <div>
                <h3>Team Information:</h3>
                <div className="batman-indent">
                    <table>
                    <tbody>
                    <tr>
                    <td width="15"></td>
                    <td>
                    Team ID:{' '}
                    <a href="https://meta-dbdev.dev.corp.dropbox.com/admin/teams/63" id="support-link" title="Team Support Page">
                        <span>63</span>
                    </a>{' '}
                    <a href="https://meta-dbdev.dev.corp.dropbox.com/admin/batman/team/63/validate"
                        title="Validate Team Data">[validate]</a><br />
                    Created: 2017-02-10 01:18:14<br />
                    License Limit: 5<br />
                    Quota: 5497558138880<br />
                    Team Type: Standard Team<br />
                    <br />
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
