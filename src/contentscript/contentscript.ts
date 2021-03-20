type ProductivityPP = {
    page_body: HTMLElement
    main: HTMLElement
    mainhider: HTMLElement
    holder: HTMLElement
    holders: Array<HTMLElement>
    hiders: Array<HTMLElement>
    height: Array<number>
}

const Productivity: ProductivityPP = {
    page_body: null,
    main: null,
    mainhider: null,
    holder: null,
    holders: [null],
    hiders: [null],
    height: [null]
};

import * as eva from 'eva-icons';

window.onload = async function(): Promise<void> {
    if(window.location.host === "forum.ls-rp.com") {

        if (!document.getElementById('tablesort-css'))
        {
            const head  = document.getElementsByTagName('head')[0];
            const link  = document.createElement('link');
            link.id   = 'tablesort-css';
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://ls-rp.com/css/tablesort.css';
            link.media = 'all';
            head.appendChild(link);
        }

        Productivity.page_body = document.getElementsByClassName('page-body')[0] as HTMLElement;
        Productivity.main = document.createElement('div');
        Productivity.main.id = "productivity-main";
        Productivity.main.classList.add('productivity-main')
        const page_inner = document.getElementsByClassName('page-body-inner')[0] as HTMLElement;
        Productivity.page_body.insertBefore(Productivity.main, page_inner);

    } else if(window.location.host === "ls-rp.com") {
        const navbar_img = document.getElementsByTagName('img');
        for(let n = 0, n2 = navbar_img.length; n < n2; n++) {
            if(navbar_img[n] === undefined) continue;
            if(navbar_img[n].src.includes('images/emenu.png')) {
                navbar_img[n].style.left = '1077px';
                navbar_img[n].style.bottom = '84px';
                navbar_img[n].style.width = '22px';
                navbar_img[n].style.height = '68px';
            }
        }

        const rtitle = document.querySelector('.rtitle');
        let tester_name = rtitle.textContent.split("Welcome back, ")[1];
        tester_name = tester_name.replace(' ', '_');
        $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&p=' + tester_name, (data: string): void => {
            if($(data).find('.cont')[0].textContent.length === 8) {
                rtitle.getElementsByTagName('span')[0].style.color = '#AA0000';
            } else {
                rtitle.getElementsByTagName('span')[0].style.color = '#00AA00';
            }
        });
        rtitle.innerHTML = '<p style="left:10px;bottom:15px;"">' + rtitle.innerHTML + '<br /><span style="margin-left: 25px;"><font color="#6666EE"><b>productivity++</b> <a class="tester_link" target="_blank" href="https://forum.ls-rp.com/viewtopic.php?f=108&t=769836#2.2.0"><u>(2.2.0)</u></a></font></span></p>';
        const title = document.title;
        if(title === "Los Santos Roleplay UCP • Application review") {
            const argh = document.getElementById('argh');
            const hypers = argh.querySelectorAll('a');
            let app_elem: HTMLAnchorElement;
            for(let h = 0, h2 = hypers.length; h < h2; h++) { 
                if(hypers[h].textContent === " Copy&Paste check") {
                    hypers[h].remove();
                }
                if(hypers[h].textContent.includes(" Find all applications submitted by")) {
                    app_elem = hypers[h];
                    await new Promise<void>((resolve) => {
                        const params = new URLSearchParams(hypers[h].href);
                        const uid = params.get('uid');
                        const e = params.get('e');
                        const apps_no_dups = document.createElement('a');
                        apps_no_dups.href = `https://ls-rp.com/?page=profile&select=administration&option=arch&uid=${uid}&e=${e}&noduplicates`;
                        apps_no_dups.innerHTML = '<br/><span data-eva="link-2-outline" data-eva-fill="#014f63" data-eva-height="14"></span>Find all applications (before being accepted)';
                        app_elem.parentElement.insertBefore(apps_no_dups, app_elem.nextElementSibling);
                        resolve();
                    });
                }
                if(hypers[h].textContent === "  Copy&Paste check") {
                    hypers[h].style.display = 'none';
                }
                if(hypers[h].textContent === "Check Google for Character Story") {
                    hypers[h].style.color = 'red';
                    hypers[h].style.fontWeight = 'bold';
                    hypers[h].innerHTML = '<span data-eva="google" data-eva-fill="red" data-eva-height="18" data-eva-animation="pulse" data-eva-hover="false" data-eva-infinite="true" style="float: left; margin-right: .1em;"></span>' + hypers[h].innerHTML + '<br>';
                }
                const img = hypers[h].getElementsByTagName('img')[0];
                if(img !== undefined) {
                    if(img.src === 'https://ls-rp.com/images/go_friend.gif') {
                        img.style.display = 'none';
                        hypers[h].innerHTML = '<span data-eva="link-2-outline" data-eva-fill="#014f63" data-eva-height="14"></span>' + hypers[h].innerHTML;
                    }
                }
                hypers[h].outerHTML = hypers[h].outerHTML.replace(/ <\/a>/, '</a> ').replace(' Find all', 'Find all');
            }

            const questions = argh.getElementsByTagName('b');
            
            const bg_q = questions.item(6);
            const bg_a = bg_q.nextElementSibling.nextSibling;
            const bg_div = document.createElement('div');
            bg_div.classList.add('app_answer');
            
            const exp_q = questions.item(7);
            const exp_a = exp_q.nextElementSibling.nextSibling;
            const exp_div = document.createElement('div');
            exp_div.classList.add('app_answer');

            const rob_q = questions.item(8);
            const rob_a = rob_q.nextElementSibling.nextSibling;
            const rob_div = document.createElement('div');
            rob_div.classList.add('app_answer');

            const mg_q = questions.item(9);
            const mg_a = mg_q.nextElementSibling.nextSibling;
            const mg_div = document.createElement('div');
            mg_div.classList.add('app_answer');

            argh.insertBefore(bg_div, bg_a);
            bg_div.appendChild(bg_a);
            argh.insertBefore(exp_div, exp_a);
            exp_div.appendChild(exp_a);
            argh.insertBefore(rob_div, rob_a);
            rob_div.appendChild(rob_a);
            argh.insertBefore(mg_div, mg_a);
            mg_div.appendChild(mg_a);

            const notice = document.getElementById("_alert");
            if(notice !== null) {
                notice.removeAttribute('style');
                const denied = notice.textContent.includes("was denied by");
                const accepted = notice.textContent.includes("was accepted by");
                if(denied === true) {
                    notice.classList.add('alert-denied');
                    notice.innerHTML = notice.innerHTML.slice(notice.innerHTML.indexOf('</span>')+7, notice.innerHTML.length-7);
                    notice.innerHTML = notice.innerHTML.trim();
                    let tester = notice.innerHTML.slice(notice.innerHTML.indexOf('denied by ')+10, notice.innerHTML.indexOf('. <br><b>Reason:'));
                    tester = tester.replace(' ', '_');
                    const character = tester;
                    await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&p=' + tester, (res) => {
                        let username;
                        username = $(res).text();
                        username = username.slice(username.indexOf('MAIN ACCOUNT USERNAME: ')+23);
                        username = username.slice(0, username.indexOf(' ')-1);
                        tester = '<a href="https://ls-rp.com/?page=profile&select=administration&option=tapps&limit=30&cname=' + tester + '" class="tester_link">' + username + '</a>';
                        notice.innerHTML = notice.innerHTML.slice(0, notice.innerHTML.indexOf('denied by ')+10) + character + ' (<b>' + tester + '</b>)' + notice.innerHTML.slice(notice.innerHTML.indexOf('. <br><b>Reason:'));
                        notice.innerHTML = '<span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="20" data-eva-animation="flip" data-eva-hover="false" style="margin-right:0.5em;margin-bottom:-0.5em"></span>' + notice.innerHTML;
                    });
                } else if(accepted === true) {
                    notice.classList.add('alert-accepted');
                    notice.innerHTML = notice.innerHTML.slice(notice.innerHTML.indexOf('</span>')+7, notice.innerHTML.length-7);
                    notice.innerHTML = notice.innerHTML.trim();
                    let tester = notice.innerHTML.slice(notice.innerHTML.indexOf('accepted by ')+12, notice.innerHTML.indexOf('. <br><b>Reason:'));
                    tester = tester.replace(' ', '_');
                    const character = tester;
                    await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&p=' + tester, (res) => {
                        let username;
                        username = $(res).text();
                        username = username.slice(username.indexOf('MAIN ACCOUNT USERNAME: ')+23);
                        username = username.slice(0, username.indexOf(' ')-1);
                        tester = '<a href="https://ls-rp.com/?page=profile&select=administration&option=tapps&limit=30&cname=' + tester + '" class="tester_link">' + username + '</a>';
                        notice.innerHTML = notice.innerHTML.slice(0, notice.innerHTML.indexOf('accepted by ')+12) + character + ' (<b>' + tester + '</b>)' + notice.innerHTML.slice(notice.innerHTML.indexOf('. <br><b>Reason:'));
                        notice.innerHTML = '<span data-eva="checkmark-circle-outline" data-eva-fill="green" data-eva-height="20" data-eva-animation="flip" data-eva-hover="false" style="margin-right:0.5em;margin-bottom:-0.5em"></span>' + notice.innerHTML;
                    });
                }
            }
            const page_urls = document.getElementsByTagName('a');
            const images = document.getElementsByTagName('img');
            let imgtag;
            for(let x = 0, x2 = images.length; x < x2; x++) {
                if(images[x].src === undefined) continue;
                if(images[x].src.includes('images/flags/')) {
                    imgtag = images[x];
                }
            }
            for(let x = 0, x2 = page_urls.length; x < x2; x++) {
                if(page_urls[x].href === undefined) continue;
                if(page_urls[x].href.includes('?page=profile&select=administration&option=ipscan&t=')) {
                    await getAbuse(page_urls[x], imgtag);
                    await checkBans(page_urls[x]);
                }
            }
            const content = document.querySelector('div#argh');
            content.innerHTML = content.innerHTML.slice(0, content.innerHTML.indexOf('<b>Applications with matching details:</b>')) + content.innerHTML.slice(content.innerHTML.indexOf('<script type="text/javascript">'));
            const textarea = content.querySelector('textarea');
            textarea.placeholder = 'Explain your decision here.';
            textarea.value = '';
            textarea.id = "app_reason";
            const buttons = document.querySelectorAll('button');
            let disabled = false;
            for(let x = 0, x2 = buttons.length; x < x2; x++) {
                if(buttons[x].name === undefined) continue;
                if(buttons[x].name === "app_accept") {
                    buttons[x].id = "app_accept";
                } else if(buttons[x].name === "app_deny") {
                    buttons[x].id = "app_deny";
                } else if(buttons[x].name === "app_ban") {
                    buttons[x].id = "app_ban";
                }
                if(buttons[x].disabled) {
                    buttons[x].style.display = 'none';
                    disabled = true;
                }
            }
            if(disabled) {
                textarea.outerHTML = document.querySelector('div#_alert').outerHTML;
            }
        } else if(title === "Los Santos Roleplay UCP • User lookup") {
            const titles = document.getElementsByClassName('s-info');
            const params = new URLSearchParams(window.location.search);
            let username: string;
            for(let x = 0, k = titles.length; x < k; x++) {
                if(titles[x].innerHTML === undefined) continue;
                if(titles[x].innerHTML.includes('MAIN ACCOUNT USERNAME')) {
                    const correct_div = titles[x].getElementsByTagName('div')[0];
                    const ucp_name = correct_div.children[0];
                    username = ucp_name.textContent;
                    if(ucp_name.innerHTML.length === 0) break;
                    ucp_name.innerHTML = '<a class="tester_link" target="_blank" href="https://ls-rp.com/?page=profile&select=administration&option=adminrecord&arecord_charnames=&ar_lookup=Look+Up&arecord_ucpnames=' + ucp_name.textContent + '">' + ucp_name.textContent + '</a>';
                    await $.get('https://ls-rp.com/?page=profile&select=administration&option=adminrecord&arecord_charnames=&ar_lookup=Look+Up&arecord_ucpnames=' + username, async (data) => {
                        const char_names = $(data).find('#_info')[1].getElementsByTagName('strong')[0].innerHTML;
                        const select = document.createElement('select');
                        select.name = 'charnames';
                        select.id = 'charnames';
                        const option = [];
                        const char_name_array = char_names.split(', ');
                        for(let y = 0, y2 = char_name_array.length; y < y2; y++) {
                            option[y] = document.createElement('option');
                            if(char_name_array[y] === params.get('u_name')) option[y].disabled = true;
                            option[y].value = char_name_array[y];
                            option[y].textContent = Number(y)+1 + '. ' + char_name_array[y];
                            select.appendChild(option[y]);
                        }
                        const label = document.createElement('div');
                        const lookup = document.createElement('div');
                        lookup.id = 'title';
                        lookup.classList.add('eva-parent-hover');
                        lookup.innerHTML = '<span data-eva="eye-outline" data-eva-fill="#0077EE" data-eva-height="20" data-eva-animation="pulse" data-eva-hover="false" data-eva-infinite="true" style="margin-bottom:-0.5em"></span> <u>LOOKUP</u>';
                        lookup.style.display = 'inline';
                        label.id = 'title';
                        label.innerHTML = 'CHARACTERS:';
                        lookup.style.fontWeight = '700';
                        select.style.marginLeft = '5px';
                        select.classList.add('char_list');
                        correct_div.parentElement.appendChild(label);
                        label.appendChild(select);
                        lookup.classList.add('tester_link');
                        label.appendChild(lookup);
                        eva.replace();
                        lookup.addEventListener('click', () => {
                            LookUpCharacter(select.options[select.selectedIndex].value);
                        })
                        const vehicles = document.getElementsByClassName('notice');
                        const bigcount: Array<number> = [];
                        const bigpcount: Array<number> = [];
                        for(let v = 0, v2 = vehicles.length; v < v2; v++) {
                            if(vehicles[v].textContent.includes('No weapons.')
                            && vehicles[v].textContent.includes('No weapon packages.')) {
                                continue;
                            }
                            const split = vehicles[v].textContent
                            .replace(/Drugs:.*\n/g, '')
                            .split('Weapon packages: ')[1]
                            .replace(': ', ': \n')
                            .replace(/\./g, '\n')
                            .split('Weapons inside: \n');
                            const weapons = split[0].replace(/ with /g, '|').replace(/ bullets/g, '').replace(/SMG \(MP5\)/g, 'MP5').replace(/Colt45 9mm/g, 'Colt .45').replace(/ \(Kalashnikov\)/g, '').split('\n');
                            const packages = split[1].replace(/ with /g, '|').replace(/ bullets/g, '').replace(/SMG \(MP5\)/g, 'MP5').replace(/Colt45 9mm/g, 'Colt .45').replace(/ \(Kalashnikov\)/g, '').split('\n');
                            const guncount: Array<number> = [];
                            const pkgcount: Array<number> = [];
                            for(let w = 0, w2 = weapons.length; w < w2; w++) {
                                const gunammo = weapons[w].split('|');
                                const gun = gunammo[0],
                                    ammo = Number(gunammo[1]);
                                if(!isNaN(ammo) && gun !== "None") {
                                    if(isNaN(guncount[gun])) { guncount[gun] = 1; } else guncount[gun] += 1;
                                    if(isNaN(bigcount[gun])) { bigcount[gun] = 1; } else bigcount[gun] += 1;
                                }
                            }
                            for(let w = 0, w2 = packages.length; w < w2; w++) {
                                const gunammo = packages[w].split('|');
                                const gun = gunammo[0],
                                    ammo = Number(gunammo[1]);
                                if(!isNaN(ammo) && gun !== "None") {
                                    if(isNaN(pkgcount[gun])) { pkgcount[gun] = 1; } else pkgcount[gun] += 1;
                                    if(isNaN(bigpcount[gun])) { bigpcount[gun] = 1; } else bigpcount[gun] += 1;
                                }
                            }
                            const carcenter = vehicles[v].getElementsByTagName('center')[0];
                            const guntotal_text = document.createElement('span');
                            guntotal_text.style.marginTop = '5px';
                            guntotal_text.innerHTML = '<br/><b>Unpackaged Weapon Totals</b><br/>';
                            let gunnames = (Object.keys(guncount));
                            for(const g in gunnames) {
                                guntotal_text.innerHTML = guntotal_text.innerHTML + `${gunnames[g]}: ${guncount[gunnames[g]]}<br />`;
                            }
                            guntotal_text.innerHTML = guntotal_text.innerHTML + '<br/><b>Packaged Weapon Totals</b><br/>';
                            gunnames = (Object.keys(pkgcount));
                            for(const g in gunnames) {
                                guntotal_text.innerHTML = guntotal_text.innerHTML + `${gunnames[g]}: ${pkgcount[gunnames[g]]}<br />`;
                            }
                            vehicles[v].insertBefore(guntotal_text, carcenter.nextSibling);
                        }

                        const heads = document.getElementsByClassName('s-title');
                        let factionhead: Element;
                        for(const h in heads) {
                            if(heads[h].textContent === "FACTION & JOB STATS") {
                                factionhead = heads[h] as Element;
                            }
                        }
                        const totalWeapsT = document.createElement('div');
                        const totalWeaps = document.createElement('div');
                        totalWeapsT.classList.add('s-title');
                        totalWeaps.classList.add('s-info');
                        totalWeapsT.textContent = 'STORED WEAPONS';
                        let gunnames = Object.keys(bigpcount);
                        gunnames = gunnames.concat(Object.keys(bigcount));
                        const sorted = [...new Set(gunnames)].sort();
                        for(const g in sorted) {
                            const innerWeap = document.createElement('div');
                            innerWeap.id = 'title';
                            innerWeap.innerHTML = `${sorted[g].toUpperCase()}: <div id="text">${bigcount[sorted[g]] != undefined?bigcount[sorted[g]]:0} ${(bigpcount[sorted[g]] != undefined && bigpcount[sorted[g]] != 0)?'(+' + bigpcount[sorted[g]] + ' packaged)':''}</div>`;
                            totalWeaps.appendChild(innerWeap);
                        }
                        factionhead.parentElement.insertBefore(totalWeapsT, factionhead);
                        factionhead.parentElement.insertBefore(totalWeaps, factionhead);
                        factionhead.parentElement.insertBefore(document.createElement('br'), factionhead);
                        factionhead.parentElement.insertBefore(document.createElement('br'), factionhead);

                        let banned_char = false;
                        for(let y = 0, z = char_name_array.length; y < z; y++) {
                            await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=' + char_name_array[y], (data2: string) => {
                                const titledivs = $(data2).find('div#title');
                                for(let t = 0, td = titledivs.length; t < td; t++) {
                                    if(titledivs[t].innerHTML === undefined) continue;
                                    if(titledivs[t].textContent.includes('ADMIN LEVEL')) {
                                        if(titledivs[t].textContent.includes('ADMIN LEVEL: 0')) {
                                            option[y].style.color = '#000';
                                        }
                                        else if(titledivs[t].textContent.includes('ADMIN LEVEL: -1')) {
                                            option[y].style.color = '#a00';
                                            option[y].style.fontWeight = '700';
                                        } else {
                                            option[y].style.color = '#0a0';
                                            option[y].style.fontWeight = '700';
                                        }
                                        if(char_name_array[y] === params.get('u_name')) {
                                            option[y].style.color = '#aaa';
                                        }
                                    }
                                }
                            });
                        }
                        for(let y = 0, yd = char_name_array.length; y < yd; y++) {
                            await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=' + char_name_array[y], (data2: string) => {
                                const textdivs = $(data2).find('div#text');
                                for(let t = 0, td = textdivs.length; t < td; t++) { 
                                    if(textdivs[t].outerHTML === undefined) continue;
                                    if(textdivs[t].outerHTML === '<div id="text">-999</div>') {
                                        if(char_name_array[y] === params.get('u_name')) {
                                            continue;
                                        } else {
                                            option[y].style.color = 'red';
                                        }
                                        option[y].style.fontWeight = '700';
                                        option[y].textContent = option[y].textContent + ' (banned) ';
                                        banned_char = true;
                                    }
                                }
                            });
                        }
                        if(banned_char) {
                            const bold = document.createElement('b');
                            bold.style.color = 'red';
                            bold.textContent = 'HAS BANNED CHARACTER';
                            label.appendChild(bold);
                            bold.outerHTML = '<span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="20" data-eva-animation="shake" data-eva-hover="false" style="margin-left:2.5em;margin-right:0.5em;margin-bottom:-0.5em"></span>' + bold.outerHTML;
                            eva.replace();
                        }
                    });
                } else if(titles[x].innerHTML.includes('100 last logins ingame')) {
                    const formatter = new Intl.DateTimeFormat('en-gb', { month: 'short', year: 'numeric' });
                    const searched = formatter.format(new Date());
                    const entries = titles[x].getElementsByTagName('a');
                    const time_arr = [];
                    const ip_array = [];
                    for(let y = 0, y2 = entries.length; y < y2; y++) {
                        if(entries[y].textContent === undefined) continue;
                        if(entries[y].href === undefined) continue;
                        if(entries[y].href.includes('ipscan&t=')) {
                            const ip_entry = entries[y].textContent;
                            if(ip_entry === '/24' || ip_entry === '/16') continue;
                            if(!ip_array.includes(ip_entry)) {
                                ip_array.push(ip_entry);
                            }
                        }
                        if(entries[y].textContent.includes(searched)) {
                            time_arr.push(Number(entries[y].textContent.split('+- ')[1].slice(0,-2)));
                        }
                    }
                    const all_time_arr_a = [];
                    const all_time_arr_t = [];
                    const total_time = time_arr.reduce((a, b) => a + b, 0);
                    const connection_log = titles[x].previousElementSibling;
                    let total_time_all_t = 0;
                    let total_time_all_a = 0;
                    await $.get('https://ls-rp.com/?page=profile&select=administration&option=adminrecord&arecord_charnames=&ar_lookup=Look+Up&arecord_ucpnames=' + username, async (data) => {
                        const char_names = $(data).find('#_info')[1].getElementsByTagName('strong')[0].innerHTML;
                        const char_name_array = char_names.split(', ');
                        let has_tester = false;
                        let has_admin = false;
                        for(let y = 0, m = char_name_array.length; y < m; y++) {
                            await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=' + char_name_array[y], (data2) => {
                                if($(data2).text().includes('ADMIN LEVEL: -1')) {
                                    has_tester = true;
                                    const entries2 = $(data2).find('.s-info')[4].getElementsByTagName('a');
                                    for(let z = 0, z2 = entries2.length; z < z2; z++) {
                                        if(entries2[z].textContent === undefined) continue;
                                        if(entries2[z].textContent.includes(searched)) {
                                            all_time_arr_t.push(Number(entries2[z].textContent.split('+- ')[1].slice(0,-2)));
                                        }
                                    }
                                }
                                if($(data2).text().includes('ADMIN LEVEL: 0') === false && $(data2).text().includes('ADMIN LEVEL: -1') === false ) {
                                    if(!char_name_array[y].includes('_Test')) {
                                        has_admin = true;
                                        const entries2 = $(data2).find('.s-info')[4].getElementsByTagName('a');
                                        for(let z = 0, z2 = entries2.length; z < z2; z++) {
                                            if(entries2[z].textContent === undefined) continue;
                                            if(entries2[z].textContent.includes(searched)) {
                                                all_time_arr_a.push(Number(entries2[z].textContent.split('+- ')[1].slice(0,-2)));
                                            }
                                        }
                                    }
                                }
                            });
                        }
                        total_time_all_t = all_time_arr_t.reduce((a, b) => a + b, 0);
                        total_time_all_a = all_time_arr_a.reduce((a, b) => a + b, 0);
                        let extras = '';
                        if(has_tester) {
                            extras += '<span style="font-size:18px;margin-left:15px;line-height:20px;color:#aa0000">Total online time this month (all Tester characters, quota: 24.0 hours): <b><u>' + round(total_time_all_t, 1) + ' hours</u></b></span><br />'
                        } if(has_admin) {
                            extras += '<span style="font-size:18px;margin-left:15px;line-height:20px;color:#00aa00">Total online time this month (all Admin characters): <b><u>' + round(total_time_all_a, 1) + ' hours</u></b></span><br /><br />'
                        } else {
                            extras += '';
                        }
                        connection_log.innerHTML = 'CONNECTION LOG<br /><span style="font-size:18px;color:#000;margin-left:15px;line-height:20px">Total online time this month (this character): <b><u>' + round(total_time, 1) + ' hours</u></b></span><br />' + extras + '<br />';
                    });
                    eva.replace();
                    for(let ip = 0, ip2 = ip_array.length; ip < ip2; ip++) {
                        const res = await checkBans(ip_array[ip]);
                        if(res) {
                            const edits = titles[x].getElementsByTagName('a');
                            for(let e = 0, e2 = edits.length; e < e2; e++) {
                                if(edits[e].textContent === ip_array[ip]) {
                                    edits[e].style.color = 'red';
                                    edits[e].style.fontWeight = '700';
                                    edits[e].innerHTML = edits[e].innerHTML + '<span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="18" style="float: left; margin-right: .1em;margin-left:-2.0em"></span>';
                                }
                            }
                        }
                    }
                    eva.replace();
                }
            }
        } else if(title === "Los Santos Roleplay UCP • Application statistics") {
            const rows = document.getElementsByTagName('td');
            for(let x = 0, x2 = rows.length; x < x2; x++) {
                if(rows[x].innerHTML === tester_name) {
                    for(let y = 0, y2 = rows[x].parentElement.children.length; y < y2; y++) {
                        const row = rows[x].parentElement.children[y] as HTMLElement;
                        if(row.style === undefined) continue;
                        row.style.backgroundColor = '#FFCCCC';
                        row.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }
            }
        } else if(title === "Los Santos Roleplay UCP • Application Archive") {
            if(window.location.search.includes('&option=arch')) {
                const exclude = window.location.search.includes('&e=');
                if(!exclude) {
                    const excl_div = document.getElementsByClassName('ui-state-highlight ui-corner-all')[0] as HTMLElement;
                    excl_div.style.display = 'none';
                }
            }
            const tablerow = document.querySelectorAll('tr');
            for(let x = 0, x2 = tablerow.length; x < x2; x++) {
                if(tablerow[x].innerHTML === undefined) continue;
                if(window.location.search.includes('&noduplicates')) {
                    const not = tablerow[x].parentElement.parentElement.parentElement;
                    if(not !== null) {
                        if(not.textContent.includes('(Has other accounts who has accepted applications, focus on character story.)')) {
                            not.classList.add('duplicate_app');
                            continue;
                        }
                    }
                }
                if(tablerow[x].innerHTML.includes('<td width="5%"><b>Application ID:</b></td>')) {
                    const appid_row = tablerow[x];
                    const appid = appid_row.getElementsByTagName('td')[1];
                    appid.innerHTML = '<a href="https://ls-rp.com/?page=profile&select=administration&option=app&read=' + appid.innerHTML.slice(1, appid.innerHTML.indexOf('<')) + '" class="tester_link">' + appid.innerHTML.slice(1, appid.innerHTML.indexOf('<')) + '</a>';
                }
                if(tablerow[x].innerHTML.includes('<td width="5%"><b>Character name:</b></td>')) {
                    const charname_row = tablerow[x];
                    const charname = charname_row.getElementsByTagName('td')[1];
                    charname.innerHTML = charname.innerHTML.replace('<u>', '').replace('</u>', '');
                    charname.innerHTML = '<a href="https://ls-rp.com/?page=profile&select=administration&option=arch&cname=' + charname.innerHTML.slice(0, charname.innerHTML.indexOf('<br>')) + '" class="tester_link">' + charname.innerHTML.slice(0, charname.innerHTML.indexOf('<br>')) + '</a>';
                }
                if(tablerow[x].innerHTML.includes('<td width="5%"><b>Reason:</b></td>')) {
                    const reason_row = tablerow[x];
                    const reason = reason_row.getElementsByTagName('td')[1];
                    reason.classList.add('reason');
                }
                if(tablerow[x].innerHTML.includes('<td width="5%"><b>Status:</b></td>')) {
                    const status_row = tablerow[x];
                    const status = status_row.getElementsByTagName('td')[1];
                    if(status.innerHTML.includes('<font color="green">Accepted</font>')) {
                        const not = status_row.parentElement.parentElement.parentElement;
                        not.style.background = '#F6FFCF';
                        not.style.borderColor = '#00AA00';
                        let tester = not.innerHTML.slice(not.innerHTML.indexOf('Handler was ')+12, not.innerHTML.indexOf(')<br></td>'));
                        tester = tester.replace(' ', '_');
                        const character = tester;
                        await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&p=' + tester, (res) => {
                            let username;
                            username = $(res).text();
                            username = username.slice(username.indexOf('MAIN ACCOUNT USERNAME: ')+23);
                            username = username.slice(0, username.indexOf(' ')-1);
                            changeHTML(status, character, username, tester);
                        });
                    } else if(status.innerHTML.includes('<font color="red">Denied</font>')) {
                        const not = status_row.parentElement.parentElement.parentElement;
                        not.style.background = '#FFE6CF';
                        not.style.borderColor = '#AA0000';
                        let tester = not.innerHTML.slice(not.innerHTML.indexOf('Handler was ')+12, not.innerHTML.indexOf(')<br></td>'));
                        tester = tester.replace(' ', '_');
                        const character = tester;
                        await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&p=' + tester, (res) => {
                            let username;
                            username = $(res).text();
                            username = username.slice(username.indexOf('MAIN ACCOUNT USERNAME: ')+23);
                            username = username.slice(0, username.indexOf(' ')-1);
                            changeHTML(status, character, username, tester);
                        });
                    }
                }
            }

            const argh2 = document.querySelectorAll('div.notice:not(.duplicate_app)');
            for(let x = 0, x2 = argh2.length; x < x2; x++) {
                const argh = argh2[x];
                if(argh.innerHTML === undefined) return;

                const questions = argh.getElementsByTagName('b');
                
                const bg_q = questions.item(8);
                if(bg_q !== null) {
                    const bg_a = bg_q.nextElementSibling.nextSibling;
                    const bg_div = document.createElement('div');
                    bg_div.classList.add('app_answer', 'archive');
                    
                    const exp_q = questions.item(9);
                    const exp_a = exp_q.nextElementSibling.nextSibling;
                    const exp_div = document.createElement('div');
                    exp_div.classList.add('app_answer', 'archive');

                    const rob_q = questions.item(10);
                    const rob_a = rob_q.nextElementSibling.nextSibling;
                    const rob_div = document.createElement('div');
                    rob_div.classList.add('app_answer', 'archive');

                    const mg_q = questions.item(11);
                    const mg_a = mg_q.nextElementSibling.nextSibling;
                    const mg_div = document.createElement('div');
                    mg_div.classList.add('app_answer', 'archive');

                    argh.insertBefore(bg_div, bg_a);
                    bg_div.appendChild(bg_a);
                    argh.insertBefore(exp_div, exp_a);
                    exp_div.appendChild(exp_a);
                    argh.insertBefore(rob_div, rob_a);
                    rob_div.appendChild(rob_a);
                    argh.insertBefore(mg_div, mg_a);
                    mg_div.appendChild(mg_a);
                }

                const header = argh.querySelector('center');
                const appid = header.innerHTML.slice(header.innerHTML.indexOf('>#') + 2, header.innerHTML.indexOf(' - (Date'));
                header.innerHTML = header.innerHTML + ' <a id="hide' + appid + '" class="tester_link">[HIDE]</a>';
                const div = header.parentElement.parentElement;
                div.id = 'notice' + appid;
                if(!window.location.search.includes('&noduplicates')) {
                    ProcessArchive(Number(x)+1, false);
                } else {
                    ProcessArchive(Number(x)+1, true);
                }
            }
        } else if(title === "Los Santos Roleplay UCP • IP Scan") {
            const info = $('.cont b').last().get(0);
            info.innerHTML = '<center>' + info.innerHTML.replace('href="#game_logs"', 'id="game_logs"').replace('first table', '<a id="ucp_logs">first table</a>').replace('gameserver', 'game server').replace('<img', '<noload').replace('/img>', '/noload>').replace('all logs of', 'all IP logs on').replace(' and t', '.<br/>T') + '</center><br />';
            
            const ip_rows = document.getElementsByTagName('td');
            const username: Promise<string>[] = [];
            const linkarr: Element[] = [];
            const tables = document.getElementsByTagName('table');

            tables[0].classList.add('ucp_logs');
            tables[1].classList.add('game_logs');

            for(let x = 0, x2 = tables.length; x < x2; x++) {
                const table = tables[x];
                if(table.innerHTML === undefined) continue;
                const headers = table.getElementsByTagName('th');
                const charname_head: HTMLElement[] = [];
                for(let h = 0, h2 = headers.length; h < h2; h++) {
                    if(headers[h].textContent === "Username (How often)") {
                        headers[h].textContent = "Character Name";
                        charname_head.push(headers[h]);
                    }
                }
                for(let c = 0, c2 = charname_head.length; c < c2; c++) {
                    const username_header = document.createElement('th');
                    username_header.textContent = "Username";
                    charname_head[c].insertAdjacentElement('afterend', username_header);
                }
                const rows = table.getElementsByTagName('tr');
                for(let r = 0, r2 = rows.length; r < r2; r++) {
                    const ipcell = rows[r].getElementsByTagName('td')[1];
                    if(ipcell === undefined) continue;
                    const username_cell = document.createElement('td');
                    username_cell.textContent = "Loading...";
                    username_cell.classList.add('ucp_name');
                    ipcell.insertAdjacentElement('afterend', username_cell);

                    const datetimecell = rows[r].getElementsByTagName('td')[4];
                    datetimecell.innerText = datetimecell.innerText.replace(/ - /, '/').replace(/ - /, ' ');

                    if(ipcell.innerHTML.includes('BANNED')) {
                        ipcell.childNodes[2].remove();
                        ipcell.childNodes[1].remove();
                        for(let c = 0, c2 = ipcell.parentElement.children.length; c < c2; c++) {
                            (ipcell.parentElement.children[c] as HTMLElement).style.backgroundColor = '#FFDDDD';
                            (ipcell.parentElement.children[c] as HTMLElement).style.fontWeight = 'bold';
                            (ipcell.parentElement.children[c] as HTMLElement).style.color = 'red';
                        }
                    }
                }
            }

            for(let x = 0, x2 = ip_rows.length; x < x2; x++) {
                const row = ip_rows[x];
                if(row.innerHTML === undefined) continue;
                const images = row.getElementsByTagName('img');
                for(let y = 0, y2 = images.length; y < y2; y++) {
                    if(images[y].src === 'https://ls-rp.com/images/go_friend.gif') {
                        images[y].style.display = 'none';
                    }
                }
                const links = row.getElementsByTagName('a');
                for(let l = 0, l2 = links.length; l < l2; l++) {
                    const link = links[l];
                    if(link.innerHTML === undefined) continue;
                    if(link.parentElement.childNodes[1]) link.parentElement.childNodes[1].textContent = link.parentElement.childNodes[1].textContent.replace(/\([0-9]\)/, '');
                    if(link.href === "https://ls-rp.com/?page=profile&select=administration&option=lookup&p=") {
                        link.innerText = "No Character";
                        link.removeAttribute('href');
                        link.parentElement.nextElementSibling.textContent = '';
                    } else {
                        username.push(getUsername(link.innerText));
                        linkarr.push(link.parentElement.nextElementSibling);
                        if(link.parentElement.style.backgroundColor === 'rgb(255, 221, 221)') {
                            link.classList.add('banned_ip');
                            link.outerHTML = link.outerHTML + '<span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="18" style="float: left;margin-left:-.5em"></span><span style="color:red;font-weight:bold;float:right;">BANNED</span>';
                        }
                        eva.replace();
                    }
                }
            }
            const resolved = await Promise.all(username);
            for(let r = 0, r2 = resolved.length; r < r2; r++) {
                linkarr[r].innerHTML = `<a href="https://ls-rp.com/?page=profile&select=administration&option=adminrecord&arecord_charnames=&arecord_ucpnames=${resolved[r]}&ar_lookup=Look+Up" target="_blank">${resolved[r]}</a>`;
            }

            const rows = document.getElementsByTagName('tr');
            for(let r = 0, r2 = rows.length; r < r2; r++) {
                const ip = rows[r].getElementsByTagName('td')[3];
                if(ip === undefined) continue;
                ip.innerHTML = ip.innerHTML + ' <a style="float: right;margin-left: 5px;" target="_blank" class="tester_link" href="https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + ip.textContent.slice(0, ip.textContent.slice(0, ip.textContent.lastIndexOf('.')).lastIndexOf('.')) + '.">/16</a> <a style="float: right;" target="_blank" class="tester_link" href="https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + ip.textContent.slice(0, ip.textContent.lastIndexOf('.')) + '.">/24</a>';
            }
        } else if(title === "Los Santos Roleplay UCP • Applications Overview") {
            if(tester_name.includes('_Test')) {
                const page = document.getElementsByClassName('cont')[0];
                const pos = page.getElementsByTagName('center')[0];
                const howmany = document.createElement('div');
                howmany.classList.add('howmany');
                const para = document.createElement('p');
                para.classList.add('popup');
                howmany.appendChild(para);
                pos.insertBefore(howmany, null);
                CountApps(tester_name, para);
            }
            const ucp_name = [];
            const array = [];
            const ip_array = [];
            const ip_rows = document.getElementsByTagName('td');
            for(let x = 0, x2 = ip_rows.length; x < x2; x++) {
                const row = ip_rows[x];
                if(row.innerHTML === undefined) continue;
                const images = row.getElementsByTagName('img');
                for(let y = 0, y2 = images.length; y < y2; y++) {
                    if(images[y].src === 'https://ls-rp.com/images/go_friend.gif') {
                        images[y].style.display = 'none';
                    }
                }
                const links = row.getElementsByTagName('a');
                for(let y = 0, y2 = links.length; y < y2; y++) {
                    if(links[y].target === "_blank") {
                        ip_array.push(links[y].textContent);
                        array.push([links[y], false]);
                    }
                }
            }

            const tables = document.getElementsByTagName('table');

            for(let x = 0, x2 = tables.length; x < x2; x++) {
                const table = tables[x];
                if(table.innerHTML === undefined) continue;
                const headers = table.getElementsByTagName('th');
                const charname_head: HTMLElement[] = [];
                for(let h = 0, h2 = headers.length; h < h2; h++) {
                    if(h === 0 || h === 6) {
                        headers[h].style.display = 'none';
                    }
                    if(headers[h].textContent === "Username") {
                        headers[h].textContent = "Character Name";
                        charname_head.push(headers[h]);
                    }
                }
                for(let c = 0, c2 = charname_head.length; c < c2; c++) {
                    const username_header = document.createElement('th');
                    username_header.textContent = "Username";
                    charname_head[c].insertAdjacentElement('afterend', username_header);
                }
                const rows = table.getElementsByTagName('tr');
                for(let r = 0, r2 = rows.length; r < r2; r++) {
                    const numbercell = rows[r].getElementsByTagName('td')[0];
                    if(numbercell !== undefined) {
                        numbercell.style.display = 'none';
                    }
                    const ipcell = rows[r].getElementsByTagName('td')[2];
                    if(ipcell === undefined) continue;
                    const username_cell = document.createElement('td');
                    username_cell.textContent = "Loading...";
                    username_cell.classList.add('ucp_name');
                    ipcell.insertAdjacentElement('afterend', username_cell);

                    const datetimecell = rows[r].getElementsByTagName('td')[5];
                    datetimecell.innerText = datetimecell.innerText.replace(' - ', ' ');
                }
            }

            const dups = findDuplicates(ip_array);
            const taken = [];
            let ran: number;
            for(let y = 0, y2 = dups.length; y < y2; y++) {
                ran = Math.floor(Math.random() * (color_list.length));
                if(taken[ran] === true) {
                    ran = Math.floor(Math.random() * (color_list.length));
                }
                taken[ran] = true;
                for(let x = 0, x2 = array.length; x < x2; x++) {
                    if(array[x][0].textContent === dups[y]) {
                        array[x][0].style.color = color_list[ran];
                        array[x][0].style.fontWeight = 'bold';
                        (array[x][0] as HTMLElement).parentElement.style.backgroundColor = bg_list[ran];
                        ((array[x][0] as HTMLElement).parentElement.previousElementSibling as HTMLElement).style.color = color_list[ran];
                        ((array[x][0] as HTMLElement).parentElement.previousElementSibling as HTMLElement).style.fontWeight = 'bold';
                        for(let z = 0, z2 = array[x][0].parentElement.parentElement.children.length; z < z2; z++) {
                            if(array[x][0].parentElement.parentElement.children[z].style !== undefined) {
                                array[x][0].parentElement.parentElement.children[z].style.backgroundColor = bg_list[ran];
                            }
                        }
                        array[x][0].outerHTML = array[x][0].outerHTML + '<span data-eva="copy" data-eva-fill="' + color_list[ran] + '" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
                    }
                }
            }
            eva.replace();
            for(let x = 0, x2 = ip_rows.length; x < x2; x++) {
                const row = ip_rows[x];
                if(row.innerHTML === undefined) continue;
                const links = row.getElementsByTagName('a');
                for(let y = 0, y2 = links.length; y < y2; y++) {
                    if(links[y].target === "_blank") {
                        getAbuse(links[y], links[y].parentElement);
                    }
                }
            }
            for(let x = 0, x2 = tables.length; x < x2; x++) {
                const table = tables[x];
                if(table.innerHTML === undefined) continue;
                const usernames = table.getElementsByTagName('b');
                for(let y = 0, y2 = usernames.length; y < y2; y++) {
                    const name = usernames[y].textContent;
                    if(name === undefined) continue;
                    ucp_name.push(getUCPName(name, usernames[y].parentElement));
                }
            }
            for(let x = 0, x2 = tables.length; x < x2; x++) {
                const table = tables[x];
                if(table.innerHTML === undefined) continue;
                const usernames = table.getElementsByTagName('b');
                for(let y = 0, y2 = usernames.length; y < y2; y++) {
                    const name = usernames[y].textContent;
                    if(name === undefined) continue;
                    if(name.includes('_Test')) continue;
                    await checkDuplicates(name, table);
                }
            }
            for(let x = 0, x2 = ip_rows.length; x < x2; x++) {
                const row = ip_rows[x];
                if(row.innerHTML === undefined) continue;
                const links = row.getElementsByTagName('a');
                for(let y = 0, y2 = links.length; y < y2; y++) {
                    if(links[y].target === "_blank") {
                        checkBans(links[y]);
                    }
                }
            }
            const ucp_name_arr = await Promise.all(ucp_name);
            for(let x = 0, x2 = ucp_name_arr.length; x < x2; x++) {
                ucp_name_arr[x][1].innerText = ucp_name_arr[x][1].innerText.replace('Loading...', ucp_name_arr[x][0]);
            }
        }
    }
}

const color_list: Array<string> = [
	'#FFAA00', '#C12DBF', '#00AAFF', '#00AA00', '#AA00AA', '#0000EE'
];
const bg_list: Array<string> = [
	'#FFEEDD', '#FFEEFF', '#DDFFFF', '#DDFFDD', '#FFDDFF', '#DDDDFF'
];

function ProcessArchive(appid: number, noduplicates: boolean): void {
	document.getElementById("hide"+appid).style.display = "none";
	const div = document.getElementById('notice'+appid);
	Productivity.height[appid] = div.clientHeight;
	div.style.maxHeight = Productivity.height[appid] + "px";
	div.style.transition = 'max-height 1s cubic-bezier(0.3,0.5,0.1,1)';
	div.style.overflow = 'hidden';
	const id = "hide" + appid;
	document.getElementById(id).addEventListener("click", function () { HideAnn(appid); }, false);
	document.getElementById(id).style.display = '';
	if(window.location.search.includes('&uid=') && !noduplicates) {
		const argh = document.getElementsByClassName('notice');
		if(appid != argh.length) {
			/*document.getElementById('notice'+appid).style.maxHeight = 24 + "px";
			document.getElementById('hide'+appid).textContent = '[SHOW]';*/
			HideAnn(appid);
		}
	} else {
        $('.notice:not(.duplicate_app)').last().get(0).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function HideAnn(id) {
	if(document.getElementById('notice'+id).style.maxHeight != Productivity.height[id] + "px") {
		document.getElementById('notice'+id).style.maxHeight = Productivity.height[id] + "px";
		document.getElementById('hide'+id).textContent = '[HIDE]';
	} else { 
		document.getElementById('notice'+id).style.maxHeight = 24 + "px";
		document.getElementById('hide'+id).textContent = '[SHOW]';
	}
}

function isPlayerLoggedIntoUCP() {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage(chrome.runtime.id, { msg: 'check_ucp' }, (response) => { 
            resolve(response.ucp_open);
        });
    });
}

async function getAdminRecord(name) {
    const prom = new Promise<string>((resolve) => {
        chrome.runtime.sendMessage(chrome.runtime.id, { msg: 'lookup', lookup_target: name }, (response) => { 
            resolve(response.lookup);
        });
    });
    let rawdata = await prom;
    rawdata = rawdata.replace(/<img/g, '<noload').replace(/<\/img/g, '</noload');
    const data = $(rawdata);
    const currently_banned = data.text().includes('LEVEL: -999');
    const html = data.find('.table');
    const res = [];
    if(data.text().includes('This user is not registered and not listed in our database')) {
        res[0] = "User not found";
    } else {
        for(let x = 0, x2 = html.length; x < x2; x++) {
            if(html[x].outerHTML === undefined) continue;
            res[x] = html[x];
        }
    }
    return { record: res, currently_banned: currently_banned };
}

async function findNameChanges(name) {
    const prom = new Promise<string>((resolve) => {
        chrome.runtime.sendMessage(chrome.runtime.id, { msg: 'namechanges', lookup_target: name, }, (response) => { 
            resolve(response.lookup);
        });
    });
    let rawdata = await prom;
    rawdata = rawdata.replace(/<img/g, '<noload').replace(/<\/img/g, '</noload');
    const data = $(rawdata);
    if(data.find('.table_sort')[0] === undefined || data.text().includes('No namechanges related to')) {
        return "Unknown";
    }
    const new_name = data.find('.table_sort')[0].getElementsByTagName('td')[2].textContent;
    return new_name;
}

async function createAdminRecord(): Promise<void> {
    
}

async function getUsername(character) {
    const prom = new Promise<string>((resolve) => {
        chrome.runtime.sendMessage(chrome.runtime.id, { msg: 'lookup', lookup_target: character, }, (response) => { 
            resolve(response.lookup);
        });
    });
    let rawdata = await prom;
    rawdata = rawdata.replace(/<img/g, '<noload').replace(/<\/img/g, '</noload');
    const data = $(rawdata);
    let username;
    username = data.text();
    username = username.slice(username.indexOf('MAIN ACCOUNT USERNAME: ')+23);
    username = username.slice(0, username.indexOf(' ')-1);
    return username;
}

function addToPost(elem) {
    let name = elem.children[0].textContent;
    if(name.includes('(')) name = elem.children[0].textContent.split('(')[1].split(')')[0];
    const textarea = document.getElementsByName('message')[0];
    if(!textarea) return;
    let admin = '';
    if(name.includes('(')) {
        admin = elem.textContent.split(`(${name})`).split('<span')[0];
        admin = admin[0] + admin[1];
    } else admin = elem.textContent.split('<span')[0];
    textarea.textContent = `[codefix]${admin}[/codefix]
    ${name}'s ban.
    [quote="${name}"][/quote]`;
    textarea.scrollIntoView({
        behavior: "smooth",
        block: "center"
	});
}

const findDuplicates = (arr) => {
	const sorted_arr = arr.slice().sort();
	const results = [];
	for (let i = 0; i < sorted_arr.length - 1; i++) {
		if (sorted_arr[i + 1] === sorted_arr[i]) {
			if(!results.includes(sorted_arr[i])) {
				results.push(sorted_arr[i]);
			}
		}
	}
	return results;
}

async function checkBans(elem) {
	if(document.title !== "Los Santos Roleplay UCP • User lookup") {
		await $.get('https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + elem.textContent, (data) => {
			if($(data).text().includes('BANNED')) {
				if(document.title === "Los Santos Roleplay UCP • Application review") {
					elem.outerHTML = '<a style="color:red !important;font-weight:bold;" target="_blank" href="https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + elem.textContent + '">' + elem.textContent + '</a> - ban on IP <span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="18" style="float: left; margin-right: .2em;"></span><br/>';
				} else {
					elem.outerHTML = '<a style="color:red !important;font-weight:bold;" target="_blank" href="https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + elem.textContent + '">' + elem.textContent + '</a> - ban on IP <span data-eva="alert-triangle-outline" data-eva-fill="red" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
				}
			} else {
				if(document.title === "Los Santos Roleplay UCP • Application review") {
					elem.outerHTML = elem.outerHTML + '<br/>';					
				}
			}
		});
		eva.replace();
	} else {
		let ret = false;
		await $.get('https://ls-rp.com/?page=profile&select=administration&option=ipscan&t=' + elem, (data) => {
			if($(data).text().includes('BANNED')) {
				ret = true;
			}
		});
		return ret;
	}
}

async function handleAbuse(data, elem, parent) {
	if(document.title === "Los Santos Roleplay UCP • Applications Overview") {
		if(data.active_vpn || data.vpn) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" href="https://www.ipqualityscore.com/vpn-ip-address-check/lookup/' + elem.textContent + '">possible VPN</a> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
		} else if(data.active_tor || data.tor) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" href="https://www.ipqualityscore.com/vpn-ip-address-check/lookup/' + elem.textContent + '">possible TOR</a> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
		} else if(data.proxy && data.fraud_score >= 75) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" href="https://www.ipqualityscore.com/ip-reputation-check/lookup/' + elem.textContent + '">possibly blacklisted</a> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
		} else if(data.mobile) {
			elem.outerHTML = elem.outerHTML + '<span data-eva="phone-call-outline" title="Mobile Data" data-eva-fill="blue" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
		}
		parent.getElementsByTagName('img')[0].src = 'images/flags/' + data.country_code.toLowerCase() + '.png';
		parent.getElementsByTagName('img')[0].style.marginRight = '2px';
		parent.getElementsByTagName('img')[0].title = data.country_code;
		parent.getElementsByTagName('img')[0].alt = data.country_code;
	} else if(document.title === "Los Santos Roleplay UCP • Application review") {
        const ip = elem.textContent;
        const elems = document.getElementsByTagName('a');
		for(let x = 0, x2 = elems.length; x < x2; x++) {
            if(elems[x].textContent === undefined) continue;
			if(elems[x].textContent === "Check Proxy") {
				elem = elems[x];
            }
		}
		if(data.active_vpn || data.vpn) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" style="color:red !important;font-weight:bold;" href="https://www.ipqualityscore.com/vpn-ip-address-check/lookup/' + ip + '">possible VPN</a> - <b>ALWAYS DOUBLE CHECK WITH A DIFFERENT WEBSITE</b> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: left; margin-right: .1em;"></span>';
		} else if(data.active_tor || data.tor) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" style="color:red !important;font-weight:bold;" href="https://www.ipqualityscore.com/vpn-ip-address-check/lookup/' + ip + '">possible TOR</a> - <b>ALWAYS DOUBLE CHECK WITH A DIFFERENT WEBSITE</b> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: left; margin-right: .1em;"></span>';
		} else if(data.proxy && data.fraud_score >= 75) {
			elem.outerHTML = elem.outerHTML + ' - <a target="_blank" style="color:red !important;font-weight:bold;" href="https://www.ipqualityscore.com/ip-reputation-check/lookup/' + ip + '">possibly blacklisted</a> <span data-eva="shield-off-outline" data-eva-fill="red" data-eva-height="18" style="float: left; margin-right: .1em;"></span>';
		} else if(data.mobile) {
			elem.outerHTML = elem.outerHTML + '<span data-eva="phone-call-outline" title="Mobile Data" data-eva-fill="blue" data-eva-height="18" style="float: left; margin-right: .1em;"></span>';
		} else {
			elem.outerHTML = elem.outerHTML + ' (nothing detected) <span data-eva="checkmark-circle-outline" title="Nothing Detected" data-eva-fill="#00AA00" data-eva-height="18" style="float: left; margin-right: .2em; margin-left:-0.4em"></span>';
		}
		parent.src = 'images/flags/' + data.country_code.toLowerCase() + '.png';
		parent.style.marginRight = '2px';
		parent.title = data.country_code;
		parent.alt = data.country_code;
	}
	eva.replace();
}

async function checkDuplicates(name: string, table: HTMLElement) {
	await $.get('https://ls-rp.com/?page=profile&select=administration&option=arch&cname=' + name, (data) => {
        const data_text = $(data).find('.notice:last').text();
        const duplicate = (data_text.includes('(Has other accounts who has accepted applications, focus on character story.)'));
		if(duplicate) {
			handleDuplicates(name, table);
		}
	});
	eva.replace();
}

async function getUCPName(name: string, cell: HTMLElement) {
    let username: string, newCell: HTMLElement;
    await $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=' + name, (data) => {
        const text = $(data).text();
        username = text.slice(text.indexOf('MAIN ACCOUNT USERNAME: ')+23);
        username = username.slice(0, username.indexOf(' ')-1);
	});
	return [username, cell.nextElementSibling];
}

function handleDuplicates(name: string, table: HTMLElement) {
	const usernames = table.getElementsByTagName('b');
	for(let x = 0, x2 = usernames.length; x < x2; x++) {
		if(usernames[x].innerHTML === undefined) continue;
		if(usernames[x].innerHTML.includes(name)) {
			const ip = usernames[x].parentElement.parentElement.getElementsByTagName('a');
			ip[0].outerHTML = ip[0].outerHTML + '<span data-eva="people-outline" data-eva-fill="black" data-eva-height="18" style="float: right; margin-right: .1em;"></span>';
		}
	}
}

async function getAbuse(elem: HTMLElement, parent: HTMLElement = null) {
	$.getJSON('https://www.ipqualityscore.com/api/json/ip/0aeDx8sFtzSPHQKqlWP1GRhyLq7EWSOL/' + elem.textContent + '?strictness=1', function(data) { handleAbuse(data, elem, parent); });
}

function changeHTML(not: HTMLElement, character: string, username: string, tester: string) {
	not.innerHTML = not.innerHTML.slice(0, not.innerHTML.indexOf('Handler was ')+12) + character + ' / <a href="https://ls-rp.com/?page=profile&select=administration&option=tapps&cname=' + tester + '&limit=30" class="tester_link">' + username + '</a>' + not.innerHTML.slice(not.innerHTML.indexOf(')<br>'));
}

async function CountApps(name: string, elem: HTMLElement) {
	await $.get('https://ls-rp.com/?page=profile&select=administration&option=tapps&limit=150&cname=' + name, (data: string) => {
		const d = new Date();

		const dateString = ('00' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
        const notices = $(data).find('div div.notice');
        let count = 0;
        let countDenied = 0;
        for(let n = 0, n2 = notices.length; n < n2; n++) {
            const status = $(notices[n]).find('table')[0].textContent.includes('Denied (Handler was');
            if($(notices[n]).find('center')[0].textContent.includes(dateString)) {
                count++;
                if(status) {
                    countDenied++;
                }
            }
        }
		const days = (y: number, m: number) => new Date(y, m, 0).getDate();
		const days_left = days(2021, d.getMonth()+1) - d.getDate() - 1;
		if(count === 150) {
			elem.innerHTML = '<div style="background:#DDDDFF;padding:10px;border-style:solid;border-color:#CCCCFF;border-width:2px;"><b style="color:#000088">You have done <u>at least 150</u> character applications this month!</b><br />That\'s ' + (count-countDenied) + ' accepted and ' + countDenied + ' denied!</div>';
		} else if(count >= 40) {
			elem.innerHTML = '<div style="background:#DDFFDD;padding:10px;border-style:solid;border-color:#CCFFCC;border-width:2px;"><b style="color:#008800">You have done <u>' + count + '</u> character applications this month!</b><br />That\'s ' + (count-countDenied) + ' accepted and ' + countDenied + ' denied!</div>';
		} else if(days_left > 4) {
			elem.innerHTML = '<div style="background:#FFFFDD;padding:10px;border-style:solid;border-color:#FFEEBB;border-width:2px;"><b style="color:orange">You have only done <u>' + count + '</u> character applications this month!</b><br />That\'s ' + (count-countDenied) + ' accepted and ' + countDenied + ' denied!<br/><br />You have ' + days_left + ' days left to do ' + (30-count) + ' more.</div>';
		} else {
			elem.innerHTML = '<div style="background:#FFDDDD;padding:10px;border-style:solid;border-color:#FFCCCC;border-width:2px;"><b style="color:red">You have only done <u>' + count + '</u> character applications this month!</b><br />That\'s ' + (count-countDenied) + ' accepted and ' + countDenied + ' denied!<br /><br />You only have ' + days_left + ' days left to do ' + (30-count) + ' more.</div>';
		}
		elem.classList.remove('tester_link');
	});
	eva.replace();
}

function LookUpCharacter(character) {
	window.location.href = "https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=" + character;
}

function round(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}