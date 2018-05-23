<script>

var TAB_CODE=9
var DEL_CODE=46 
var BS_CODE=8
var SP_CODE=32
var DOT_CODE=190
var DOT2_CODE=110

var IDX_ON=0
var IDX_OFF=1

var IDX_AP_MODE=0
var IDX_CBRIDGE_MODE=1
var IDX_WWAN_MODE=2
var IDX_KAI_MODE=3
var IDX_MBRIDGE_MODE=4


var WIRELESS_AP_MODE=0;
var WIRELESS_CBRIDGE_MODE=1;
var WIRELESS_CWAN_MODE=2;
var WIRELESS_KAI_MODE=3;
var WIRELESS_MBRIDGE_MODE=4;

var KAID_MODE_INIT=0  // ap mode
var KAID_MODE_PSP=0 // psp kai
var KAID_MODE_NORMAL=0 // xbox kai

var AUTH_OPEN=1
var AUTH_KEY=2
var AUTH_AUTO=3
var AUTH_WPA=4
var AUTH_WPAPSK=5
var AUTH_OPEN8021X=6
var AUTH_WPANONE=7
var AUTH_WPA2=8
var AUTH_WPA2PSK=9
var AUTH_WPAPSKWPA2PSK=10
var AUTH_NOCHANGE=100

var IDX_NOENC=0
var IDX_WEP64=1
var IDX_WEP128=2
var IDX_TKIP=3
var IDX_AES=4
var IDX_TKIPAES=5

var ENCRYPT_OFF=0
var ENCRYPT_64=1
var ENCRYPT_128=2
var ENCRYPT_TKIP=3
var ENCRYPT_AES=4
var ENCRYPT_TKIPAES=5

var KEY_STRING=0;
var KEY_HEX=1;

var IDX_KEY_STRING=0;
var IDX_KEY_HEX=1;

var REGION_USA=1;
var REGION_JAPAN=2;

var DMZTWINIP_MODE_DMZ=1;
var DMZTWINIP_MODE_TWINIP=2;

var QOS_SHARING_BOUNDED=2;
var QOS_SHARING_BORROW=3;


var MSG_RESTART_CONFIRM_DEFAULT='System will restart for factory default.\nAre you sure to continue ?';
var MSG_RESTART_CONFIRM_UPNP='System will restart to change UPNP configuration.\nAre you sure to continue ? ';
var MSG_RESTART_CONFIRM_REBOOT='System will restart.\nAre you sure to continue?';
var MSG_RESTART_CONFIRM_CHANGE_LANIP='System will restart to change LAN IP address.\nAre you sure to continue ?';
var MSG_RESTART_CONFIRM_RESTORE='System will restart to recover the configuration\n Are you sure to continue ?';
var MSG_RESTART_CONFIRM_NAT='System will restart to change NAT configuration.\nAre you sure to continue ?';
var MSG_RESTART_CONFIRM_WIRELESS='System will restart to change wireless mode.\nAre you sure to continue ?';
var MSG_KAID_MODE_CHANGE_WARNING='System will restart to change KAI mode.\nAre you sure to continue ?';
var MSG_RESTART_CONFIRM_WIRELESS_CBRIDGE='System will restart to change wireless mode.\nAre you sure to continue?';
var MSG_RESTART_CONFIRM_WIRELESS_WWAN='System will restart to change wireless mode.\nAre you sure to continue?';
var MSG_TWINIP_CONFIRM_WARNING='System will restart to apply Twin IP configuration.\nAre you sure to continue ? ';
var MSG_WAN_FOR_LAN_WARNING='System will restart to change WAN port function\nContinue?';



// common
var MODIFY_OP='Modify'
var MSG_INVALID_HWADDR="Invalid MAC Address." 
var MSG_DELETE_RULE_CONFIRM="Rule will be removed.\nAre you sure to continue?" 
var MSG_SELECT_RULE_TO_DEL="Select a rule to be deleted."
var MSG_ALL_STOP_RULE="Do you want to stop all rules?"

var MSG_OPENER_PAGE_MOVED="Page is Moved."


// wireless_config_wizard
var MSG_INVALID_WEP_KEY_HEXVALUE2="Network key should be hex decimal string."
var MSG_INVALID_WPAPSK_KEY_MISMATCH="Network Key is different.\nPut the same key."


// sysconf_configmgmt
var MSG_RESTOREFILE_BLANK="Select a configuration backup file."

//natrouterconf
var MSG_RULE_NAME_IS_BLANK="Rule name is blank."
var MSG_NO_DEL_ROUTING_TABLE="Select routing table to delete!"


// wirelessconf_wdssetup
var MSG_WDS_DEL_WARNING="Are you sure to delete WDS?" 
var MSG_APADD_REQUEST_APPLY="If press 'Add' button, WDS configuration will be done."
var MSG_NO_DEL_WDS="Select WDS to delete!"


// wirelessconf_basicsetup
var MSG_BLANK_SSID="Put the SSID."
var MSG_INVALID_WEP_KEY_LENGTH="Invalid network key length."
var MSG_INVALID_WEP_KEY_HEXVALUE="Network key should be hex decimal."
var MSG_INVALID_WPAPSK_KEY_LENGTH="Network key should be more than 8 characters."
var MSG_INVALID_5_KEY_LENGTH="Network Key should be 5 characters."
var MSG_INVALID_13_KEY_LENGTH="Network Key should be 13 characters."
var SAVE_CONFIGURATION_STRING="Save all configuration?"

var MSG_BLANK_REQUEST_SSID="Put the SSID, and press 'Apply' button."
var MSG_INVALID_REQUEST_KEY="Put the Network key and press 'Apply' button."
var MSG_INVALID_REQUEST_APPLY="Press 'Apply' button to connect specified AP."
var MSG_APPLY_REQUEST_KEY="Press 'Apply' button to apply the channel"
var MSG_BEST_CHANNEL_PRE="Best channel is " 
var MSG_BEST_CHANNEL_POST="channel"
var MSG_KEY_LENGTH_DESC="Key length = "

// config_wizard
var MSG_BLANK_ACCOUNT="Put the User ID."
var MSG_BLANK_PASSWORD="Put the Password."

var MSG_INVALID_IP="Invalid IP Address."
var MSG_INVALID_NETMASK="Invalid subnet mask."
var MSG_INVALID_GATEWAY="Invalid default gateway."
var MSG_INVALID_FDNS="Invalid primary DNS"
var MSG_INVALID_SDNS="Invalid secondary DNS"


//netconf_lansetup
var NETCONF_INTERNAL_INVALID_NETWORK="Lan address is the same as WAN address."
var STATIC_LEASE_ALREADY_EXIST_IPADDRESS="This IP Address has been already added."
var STATIC_LEASE_ALREADY_EXIST_HWADDRESS="This MAC Address has been already added."

var NETCONF_INTERNAL_TOO_SMALL_LEASETIME="Lease time should be over 10 seconds."
var NETCONF_INTERNAL_TOO_BIG_LEASETIME="Lease time should be under 2147483647 seconds."
var NETCONF_INTERNAL_INVALID_LEASETIME="Lease time should be numeric."


var MSG_ERROR_NETWORK_LANIP="LAN IP address can't be the same as Network Address"
var MSG_ERROR_BROAD_LANIP="LAN IP address can't be the same as Local Broadcast Address"


//netconf_wansetup
var NETCONF_INTERNET_DHCP_MTU_INVALID="MTU is not over 1500."
var NETCONF_INTERNET_PPP_MTU_INVALID="MTU is net over 1492."
var NETCONF_INTERNET_KEEP_ALIVE_MSG="Invalid max idle tme."
var NETCONF_INTERNET_GW_INVALID_NETWORK="Default Gateway is the same as internal network."
var NETCONF_WANSETUP_CONFIRM_WANINFO="Do you want to confirm WAN connection info?"


//netconf_lansetup
var NETCONF_INTERNAL_INVALID_DHCP_S_ADDR="Invalid DHCP start pool address"
var NETCONF_INTERNAL_INVALID_DHCP_E_ADDR="Invalid DHCP end pool address"
var NETCONF_INTERNAL_INVALID_DHCP_ADDR="Invalid DHCP pool range"
var NETCONF_INTERNAL_DELETE_IP="Do you want to delete this reserved IP address?"

// wirelessconf_advanced
var DESC_INVALID_TX_POWER="Tx Power should be from 1 to 100.";
var DESC_INVALID_RTS_THRESHOLD="RTS Threshold should be from 1 to 2347.";
var DESC_INVALID_FRAG_THRESHOLD="Fragmentation Threshold should be from 256 to 2346.";
var DESC_INVALID_BEACON_INTERVAL="Beacon Period should be from 50 to 1024.";

// expertconf_kai
var KAID_MODE_CHANGE_WARNING="Restart system. Are you sure to continue ?"
var KAID_MUST_SELECT_OBT_SERVER="At least, one server should be selected."
var KAID_RESTART_KAI_UI="Please restart KAI UI."

//natrouterconf_portforward
var MAX_PORT_FORWARD=60
var NATCONF_PORTFORWARD_NO_MORE_RULE="No more add Port Forward."
var NATCONF_PORTFORWARD_INVALID_INT_IP_ADDRESS="Invalid internal IP Address."
var NATCONF_PORTFORWARD_EXT_PORT_IS_BLANK="External Port is blank"
var NATCONF_PORTFORWARD_INVALID_EXT_PORT="Invalid External Port."
var NATCONF_PORTFORWARD_INVALID_EXT_PORT_RANGE="Invalid External Port Range."
var NATCONF_PORTFORWARD_INVALID_INT_PORT="Invalid Internal Port."
var NATCONF_PORTFORWARD_INVALID_INT_PORT_RANGE="Invalid Internal Port Range"
var NATCONF_PORTFORWARD_RUN_RULE="Do you want to apply rule?"


//natrouterconf_misc
var NATCONF_INTAPPS_NO_MORE_ADD_FTP_PORT="No more add FTP port."
var NATCONF_INTAPPS_FTP_PORT_EMPTY="Port Number is blank."
var NATCONF_INTAPPS_FTP_PORT_INVALID= "Invalid Port Number."

//natrouterconf_router
var NETCONF_ROUTE_ENTRY_DELETE="Do you want to delete routing table?"
var NETCONF_ROUTE_ENTRY_SELECT="Select routing table to be deleted."

//natrouterconf_twinzipdmz
var NATCONF_TWINIPDMZ_UPDATE_TIME="IP Update Duration time should be more than 60 second."
var NATCONF_TWINIPDMZ_WARNING="This PC use Twin IP. If Twin IP is not used, The IP configuration of this PC should be reconfigured.\nAre you sure to continue ?"


//firewallconf_firewall
var USER_FWSCHED_TYPE=1
var APP_FWSCHED_TYPE=2
var URL_FWSCHED_TYPE=4
var MAX_FWSCHED_COUNT=200 
var FIREWALLCONF_FIREWALL_INVALID_TIME_TO_BLOCK="Invalid Time to Block."
var FIREWALLCONF_FIREWALL_DATE_WARNING="Select Date to Block."
var FIREWALLCONF_FIREWALL_INVALID_SOURCE_IP="Invalid Source IP Address."
var FIREWALLCONF_FIREWALL_INVALID_SOURCE_HW="Invalid Source MAC Address."
var FIREWALLCONF_FIREWALL_INVALID_DEST_IP="Invalid Destination IP Address."
var FIREWALLCONF_FIREWALL_INVALID_DEST_PORT="Invalid Destination Port."
var FIREWALLCONF_FIREWALL_RUN_RULE="Do you want to apply rule?"
var FIREWALLCONF_FIREWALL_NO_MORE_RULE="No more add account."
var FIREWALLCONF_FIREWALL_INVALID_PRIORITY="Invalid priority."

//firewallconf_netdetect
var NETCONF_NETDETECT_WARNING1="Minimum connection is 10."
var NETCONF_NETDETECT_WARNING2="0 ~ 23 range value"


//firewallconf_internet
var FIREWALLCONF_INTERNET_RESTRICTIVE_WARNING="Number of PC should be from 1 to 253."
var FIREWALLCONF_INTERNET_RESTRICTIVE_CLEARANCE="Do you clear configuration to all PC infomation?"

//expertconf_ddns
var EXPERTCONF_DDNS_HOSTNAME_IS_BLANK = "Host name is blank."
var EXPERTCONF_DDNS_HOSTNAME_NOT_IPTIMEORG = "Host name must be end whid iptime.org."
var EXPERTCONF_IPTIMEDNS_NOMORE_WANRING1 ="No more ipTIME DDNS Host."
var EXPERTCONF_IPTIMEDDNS_INVALID_USERID= "Only E-mail Address available."
var EXPERTCONF_DYNDNS_NOMORE_WANRING1="No more Dyndns Host."
var INVALID_EMAIL_ADDRESS_STR="Invalid E-mail Address."
var EXPERTCONF_IPTIMEDDNS_INVALID_HOSTNAME = "'_' or '.' charater not allowed in a host name"

//expertconf_remotepc
var EXPERTCONF_WOL_PC_NAME_IS_BLANK="PC name is blank."
var EXPERTCONF_WOL_DEL_PC="Do you want to delete PC?"
var EXPERTCONF_WOL_WANT_TO_WAKE_UP_PC ="Do you want to wake up this PC?"

//expertconf_hostscan
var ICMP_PING=0
var ARP_PING=1
var PING_SCAN=0
var TCP_PORT_SCAN=1
var SYSINFO_HOST_INVALID_TIMEOUT =   "Time out is blank."
var SYSINFO_HOST_TIMERANGE   =       "Time out should be more than 1 sec."
var SYSINFO_HOST_INVALID_DATASIZE =  "Data Size is blank."
var SYSINFO_HOST_DATARANGE    =      "Data range should be from 0 to 65,000."
var SYSINFO_HOST_INVALID_START  =    "Start Port is blank"
var SYSINFO_HOST_PORTRANGE      =    "Port range should be form 0 to 65,535."

//trafficconf_conninfo
var TRAFFICCONF_CONNINFO_DELETE_CONN="Do you want to delete a connection of designated IP address?"

//trafficconf_switch
var SELECT_VLAN_PORT_WARNING ="Select VLAN Port."
//trafficconf_loadshare
var NATCONF_PORTFORWARD_NO_MORE_RULE="No more add Port Forward."
var NATCONF_PORTFORWARD_RULE_NAME_IS_BLANK="Rule name is blank."
var NATCONF_INTSERVER_INVALID_EXT_PORT="Invalid Port."
var NATCONF_LOADSHARE_KEEP_WRR="You can deactivate Auto Line Backup while WRR LS has being activated." 
var NATCONF_LOADSHARE_ON_LINE_BACKUP="Auto Line Backup will be activated also. Do you want to continue?"
var NATCONF_LOADSHARE_DELETE_RULE="Do you want to delete rule?"
var NATCONF_PORTFORWARD_SELECT_RULE_TO_DEL="Select a rule to be detected."
//sysconf_syslog
var SYSCONF_SYSLOG_WANRING = "Invalid Hour."
var SYSCONF_SYSLOG_EMAIL_CONFIRM= "Send system log report to the admin by e-mail now."
var SYSCONF_SYSLOG_CLEAR_CONFIRM= "All system log will be cleared."

//sysconf_login
var SYSCONF_LOGIN_INVALID_NEW_PASS=     "Your New password entries did not match."
var SYSCONF_LOGIN_INVALID_NEW_ID  =     "Invalid new account string: only allowed for alphabet and numeric character."
var SYSCONF_LOGIN_RELOGIN         =     "You would re-login the system,if you altered a password."

//expertconf_pptpvpn
var EXPERTCONF_PPTPVPN_VPN_ACCOUNT_IS_BLANK="VPN account is blank"
var EXPERTCONF_PPTPVPN_VPN_PASSWORD_IS_BLANK="VPN password is blank"
var EXPERTCONF_PPTPVPN_IP_ADDRESS_IS_INVALID="IP Address is blank"
var EXPERTCONF_PPTPVPN_DO_YOU_WANT_DELETE="Do you want to delete a Account?"

//accesslist

var ACCESSLIST_NOIPLISTMSG_1="No configured IP Address. Would you add your computer's IP Address("
var ACCESSLIST_NOIPLISTMSG_2=") connected?"
var ACCESSLIST_WRONG_INPUT_IP="Invalid IP Address."
var ACCESSLIST_WRITE_EXPLAIN="Description is blank."
var ACCESSLIST_DEL_WANT="Do you want to delete item?"

//reboot
var REBOOT_CHANGEIP_RETRY_LOGIN="Because of local IP address change, Reconnect."
var REBOOT_CHANGEIP_RETRY_NOLOGIN_WINDOWS="Reconnect to the configuration page."
var SYSCONF_RESTORE_RETRY_CONNET="Reconnect to the restore configuration page."

//trafficconf_qos
var QOS_BASIC_WARNING="All QoS configurations would be reset. Carry on this process?"
var QOS_COMMON_EXCCED_MAX_CLASS="Excced max number of class."
var QOS_COMMON_EXCCED_MAX_SPEED="Excced max internet speed range."
var QOS_COMMON_ISOLATED_EXCEED="Total bandwidth sum of classes which has 'isolated' proerty cat NOT exceed max internet speed rang"
var QOS_COMMON_NO_CHANGE_DIRECTION="Can't change a direction of class."
var QOS_COMMON_ONLY_DIGIT="Only digit available."
var QOS_COMMON_BASIC_SETUP_FIRST="QoS Basic setup first."
var QOS_PROTOCOL_SELECT="Select a Protocol type."
var QOS_PORT_PORTRANGE="Port range should be from 1 to 65,535"
var QOS_PORT_INVALID_EXT_PORT_RANGE="Invalid External Port Range."
var QOS_BADNWIDTH_EMPTY="Bandwidth Field Empty."
var QOS_RATE_RANGE="Rate range : 32 Kbps ~ 50 Mbps"
var QOS_BPI_RANGE="Invaild IP address range for BPI. (Available: 2 ~ 31)"


// wirelessconf_multibssid
var MSG_DEL_MBSSID_WARNING="Wireless network will be removed. Are you sure to continue ?"
var MSG_MBSSID_QOS_WARNING="Minimum value is 100 Kbps."


//trafficconf_connctrl
var MSG_CONNECTION_MAX_WARNING="Continue?"
var MSG_CONNECTION_MAX_TOO_SMALL="Too small max connection. Set over 512."
var MSG_UDP_CONNECTION_MAX_TOO_BIG="Max UDP connection should be set between 10 and max connection."
var MSG_ICMP_CONNECTION_MAX_TOO_BIG="Max ICMP connection should be less than max connection."
var MSG_INVALID_RATE_PER_MAX="Invalid connection rate per 1 PC."

//sysconf_misc
var MSG_WBM_POPUP="Reconnect again."


// trafficconf_switch
var MSG_SAME_PORT_MIRROR="The same port can't be mirrored."

var MSG_HUBMODE_WARNING="!!! Warning !!\nIn Hub Mode, all nat routing function would be stopped and Setup web page can't be connected.\n\n\
Continue? "
var MSG_HUBMODE_CONFIRM="Press OK button to continue."


// trafficconf_portqos
var MSG_PORTQOS_BOTH_ZERO=": 0 Mbps can't be configured."
var MSG_PORTQOS_MAX_ERROR=": The value over 100 Mbps can't be configured."
var MSG_PORTQOS_INVALID_VALUE=": Invalid rate(it should be "


//firewallconf_etc
var DESC_INVALID_ARP_PERIOD="ARP packet/sec should be 1 ~ 100."

// wirelessconf_multibridge
var MSG_DEL_WWAN_WANRING="Wired WAN Port(Internet Port) will be stopped. Do you want to continue?"


// iframe_pppoe_sched
var MSG_INVALID_HOUR_VALUE="Hour value should be in 0 ~ 23."
var MSG_INVALID_MIN_VALUE="Min value should be in 0 ~ 59."
var MSG_PPPOE_SCHEDULE_SAME_RULE="The same schedule already exists."

// trafficconf_lspolicy
var MSG_BACKUP_METHOD_AT_LEAST_ONE="Select at least one method"
var MSG_BACKUP_METHOD_DOMAIN="Domain name should be designated"


var MSG_INVALID_PROTONUM="Invalid Proto Num"

var MSG_MBRIDGE_AUTO_CHANNEL_STRING="[Auto Channel Search] function will search the upper AP if the upper AP channel is changed.\n\
Because this AP keep searching the upper AP whenever bridge connection is lost, this function can make AP function be abnormal.\n\
So, we don't recommend to use multi bridge function and AP function together only when [Auto Channel Search] is ON.\n\
Continue?";

var TRAFFICCONF_ALL_OPTIONS_CLEAR =  "All options will be cleared.\nContinue?"
var MSG_SELECT_DEL_MBSS = "Select wireless network to remove."


var AUTO_STRING = "Auto"
var MBRIDGE_AUTO_CHANNEL_SEARCH = "Auto Channel Search"

var UPPER_CHANNEL_TXT = "Lower"
var LOWER_CHANNEL_TXT = "Upper"

var LAN_GATEWAY_WARNING_MSG = "When no WAN internet connection, this option is valid for router itself to connect internet.\nContinue?";
var MSG_IPPOOL_MAX_WARNING = "No more use of the IP range condition."

var MSG_DFS_WARNING="This channel is DFS channel.\nAP may be activated only unless radar signal is found during 1 ~ 10 minutes."


var SYSCONF_LOGIN_BLANK_ID =     "Account is empty."
var SYSCONF_LOGIN_BLANK_PASS  = "Password is empty."
var SYSCONF_LOGIN_REMOVE_WARNING  = "Remove Account/Password. Continue?"
var SYSCONF_LOGIN_INVALID_SESSION_TIMEOUT  = "Session Timeout should be 1 ~ 60 minutes."



var SYSCONF_LOGIN_CANT_REMOVE_ID  = "ID & Password can't be removed when Session method is used."
var SYSCONF_LOGIN_SHOULD_HAVE_IDPASS  = "To enable Session, ID & Password MUST be set."
var SYSCONF_LOGIN_RELOGIN_SESSION  = "Move to Login page after configuring. Continue?"

var MSG_PPTPVPN_REBOOT = "Reboot to change PPTPVPN server configuration?"




var INVALID_HOUR_TEXT="The range should be 0 ~ 23."
var INVALID_MIN_TEXT="The range should be 0 ~ 59."
var SELECT_DAY_DESC="Check day or every day at least."

var MSG_INVALID_AUTH_FOR_BRIDGE="This AP can't be connected by Bridge."

var MSG_BLANK_SSID_MY_AP="My Wireless Network field is blank."
var MSG_BLANK_SSID_UPPER_AP="Upper AP SSID field is blank"

var MSG_TOO_LONG_SSID="SSID length is too long.\nNon ascii character have 3 bytes.\nCurrent Length of SSID Field: "
var SYSCONF_MISC_MULTILANG_WARNING    = "Move to Status Summary page after configuring. Continue?"

</script>

