var getAddr = function() {

	var ip = null;
	try {
	  ip = webapis.network.getIp();
	} catch (e) {
	  console.log("getIp exception [" + e.code + "] name: " + e.name + " message: " + e.message);
	}

	if (ip !== null) {
	  console.log("[getIp] ip: " + ip);
	  document.getElementById('addr').innerHTML = ip;
	}
	
	console.log(ip);
	
	document.getElementById('addr').innerHTML = "TEST";
};

getAddr();