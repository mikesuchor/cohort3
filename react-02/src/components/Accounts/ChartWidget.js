import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

function ChartWidget({accounts}) {
    const data = {
        labels: accounts.map((account) => account.accountName),
        datasets: [{
            data: accounts.map((account) => account.accountBalance),
            backgroundColor: [
                '#003F5C',
                '#2F4B7C',
                '#665191',
                '#A05195',
                '#D45087',
                '#F95D6A',
                '#FF7C43',
                '#FFA600',
                '#C22532'
            ],
            hoverBackgroundColor: [
                '#002435',
                '#243A60',
                '#544378',
                '#86447D',
                '#D0407C',
                '#F83747',
                '#FF611C',
                '#D88C00',
                '#A11F2A'
            ]
        }]
    };

    const totalAccounts = () => {
        const totalBalance = accounts.reduce((total, account) => {
            return total += account.accountBalance;
        }, 0);
        return totalBalance;
    }

    return(
        <div id="create-account-widget" className="widget">
            <h1 className="widget-title">ACCOUNT CHART</h1>
            <div className="widget-body">
                <Doughnut data={data} width={600} height={600} />
                <Bar data={data} width={600} height={600} />
                <h2 className="account-total">TOTAL BALANCE OF ACCOUNTS: ${totalAccounts()}</h2>
            </div>
        </div>
    );
}

export default ChartWidget;