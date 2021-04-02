---
title: Configuring Rasberry PI using Mac
date: 2021-04-03
path: /configuring-rasberry-pi-using-mac
tags: rasberry-pi
featuredImage: ../../static/images/IMG20210402234845_00.jpg
---

## A Short Introduction

Although this title says, configuring Rasberry PI using a mac, I am sure the steps I took for this can be done for any other OS, such as windows/Linux.
<br/>
<br/>
I know someone who had received a raspberry-pi, let’s call it r-pi from now, from someone and the person needed to get the stuff running. I wanted to explore the r-pi for a long time, but could not convince myself to get one for me. I could not find a good opportunity/reason to invest in this. Anyways this was a perfect opportunity to get my hands dirty with r-pi and I volunteered to help my friend to get started with this. Oh boy, this was one hell of a ride for me.

## The Rant

I am a [software engineer](https://bisvarup.me/) and I like software more than hardware. The reason behind that is I can easily check what is going wrong on software but not so on hardware. For example, if there is a bug/error I am getting while running a software googling the error message takes me quite far into understanding the problem, but hardware is another beast. The things to consider for hardware are just too vast, you need to check if your device is receiving power, if yes, did it get burnt because of too much power? Is there any loose connection hence you are not receiving data? I am sure there are ways to solve this, but I think we need other [hardware kits](https://en.wikipedia.org/wiki/Voltmeter) for this and this is too much of a burden for me hence I stay away from hardware as much as possible.
<br/>
<br/>
So I received the r-pi about 2 weeks ago and I tried my hands on it about 3 times, 3rd time was the charm :) I was told when I got the pi that OS was already installed. 
I am aware of a few common OS of the r-pi, aka [Raspberry PI OS](https://www.raspberrypi.org/software/operating-systems/), [ubuntu](https://ubuntu.com/raspberry-pi), a flavor of [Kali Linux](https://www.kali.org/docs/arm/kali-linux-raspberry-pi/), etc. I knew the easiest to use was Rasberry PI OS as that comes from the vendors and I think that would be “good enough”. Never underestimate the power of “good enough”. 

## Day 1 - The failed ethernet test
So, the first thing I do is google how to connect to a raspberry pi. I saw that it needed me to connect to an ethernet cabel to a computer and r-pi. Now, I have a windows machine as well and it is of an older model, the ones who have the ethernet cabel jack, not sure if nowadays windows have this or not. So I did that and I connected to r-pi and I disconnected the wifi. Yellow lights blink on the r-pi and I thought, okay this means that data must be passing. So I run the ipconfig command and try to get the IP address of my windows machine. I knew I had to look for ethernet in the list of options and I found an entry. It was along the lines of 169…. I do not remember now, but I think this range is also a [private IP range](https://packetlife.net/blog/2008/sep/24/169-254-0-0-addresses-explained/). Anyways that was fine, but how do I ssh into the r-pi? I do not know its IP address. 

![Ethernet Cable](/images/IMG20210402234908_00.jpg "Ethernet Cable")

I googled and found that I need to ssh into [raspberrypi.local](https://www.raspberrypi.org/documentation/remote-access/ip-address.md) and it would work. Okay, I tried that and nothing happened. I tried a bunch of other variations such as raspberrypi.home and raspberrypi, and nothing worked. Basically, I am trying all possible combinations in the hope that something would stick. That did not work.

## Day 2 - The sd card & monitor test
The next thing I did was I wanted to look if the OS was installed. I have a Mac USB adapter. It is one of those devices where you can connect a bunch of other devices to your mac, such as USB devices, HDMI cables, memory cards, etc. I tried reading the memory card using this and saw that files were indeed in the memory card. Okay, so it means OS is probably installed. Me being familiar with software tried to find some sort of Readme.md or Readme.txt, but I could not find anything like that.
![USB Adapter Cable](/images/IMG20210402234856_00.jpg "USB Adapter Cable")
I dropped it then as it was not working.
<br/>
<br/>
The next time I tried this again, I thought of connecting the r-pi directly to a display. After all the r-pi is just a CPU and given a display it should show something, right? Wrong, it did not show me anything. Now I do not have a micro HDMI cabel, I connect the green headphone-like jack to r-pi and the other end to my monitor, looking back I do not know if this was correct. Anyways that did not work again and I dropped this once again.

![External Monitor](/images/IMG20210403003108_00.jpg "External Monitor")
![Monitor Connector](/images/IMG20210403003116_00.jpg "Monitor Connector")

## Day 3 - Combining the learnings of day 1 and day 2
The third time I tried this was today, I was doing some work connecting my adapter to my mac and phone when I saw something that gave me an idea. I saw that the adapter also has an ethernet jack. Okay, if I connect the ethernet jack to this adapter and the other end to my r-pi then it should work, right? If I am using my mac for this it would be easier, as I am comfier with mac now. So I do that and just like the first time all lights blink but nothing meaningful happens. When I ran ifconfig I saw that I am getting a 169. Ip address like the first time. If I disconnect the ethernet cabel from r-pi then I am not getting the 169 IP address. This got me thinking, can it happen that the r-pi is fine but the OS is not installed or is faulty?
![Adapter to ethernet to r-pi](/images/IMG20210403003142_00.jpg "Adapter to ethernet to r-pi")
I took a chance and thought of reinstalling the OS. I downloaded the [Raspberry Pi Imager](https://www.raspberrypi.org/software/) software or something from the R-PI website. I downloaded it for Mac, it causes some issues initially like I had to give all files permission and all, and I do not know if the stuff had actually run. So I ended up doing this twice. (on hindsight I think it worked the first time itself). So after doing this I re-inserted the memory card back into the r-pi and booted it up. Then I tried to ping raspberrypi.local again and what is this, it worked. I was getting a response now. Well, how did I know that I should try pinging raspberrypi.local? Well while using the imager app there is an advanced options window which you can open up by pressing control + shift + x. There I saw the raspberrypi.local text.
<br/>
<br/>
Anyways I am elated at this point, okay so it means that it is working now and I am on the right path. So the next thing I try is ssh into the box. That did not work. I googled a bit and got to know that I need to “enable” ssh. There seem to be two options for this. Either I can use a GUI to see the contents of r-pi on a screen and follow some on-screen instructions to do it or I can try the non-gui method. 

I tried the second option, the second option was to add a file called “ssh” in the root path of the sd-card. The contents of the ssh file can be anything, it does not matter. I did that and restarted the PI again. It worked, but the login password was failing.

Okay, I googled this and found out that I need to use the username as “**pi**” and the password as “**raspberry**”. This worked and I was into the machine. 

Great, I think to myself, Ideally, I want to connect to the machine without using the ethernet cabel as I should directly be able to connect to the machine by the IP address of the r-pi. I think I did not mention but till now I had the ethernet cabel connected the whole time. So I googled a bit further and I came up with something like raspi-config, using this tool we can set up the raspberry pi to connect to any wifi out there.

Turns out there is also a couple of methods for this, and I tried both of them, both the methods were using CLI so we were fine. The first method was to add a file called wpa_supplicant.conf in /etc/wpa_supplicant or something and the other was using the raspi-config.

The idea if the file is basically you mention your country code in the file and the wifi SSID and password and r-pi would pick that up. The other method was using raspi-config.

Here is the contents for the file for the first method.
```sh
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
country=in
update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
 scan_ssid=1
 ssid="wifi"
 psk="abcd"
}
```
The first method did not work and I tried the second method now. Basically, we need to set the locale > wifi country to IN (that’s where I am from). Then set the SSID and password from raspi-config > system settings > WLAN or something.
After this, I needed to restart the r-pi, and boom it worked.

So I do an ifconfig to get the IP address of the r-pi. I disconnect the ethernet cabel and try to login using my mac and the IP address of the r-pi. It worked. Amazing.

That’s all I did to get the r-pi working and I think it is in a good state, as in when I want to connect to the r-pi I do not need to use the ethernet cabel and just using the ip-address and sshing into the machine should work,

## References

1. [How to use Raspberry Pi Imager | Install Raspberry Pi OS to your Raspberry Pi (Raspbian) - YouTube](www.youtube.com)
2. [How to use Raspberry Pi Imager | Install Raspberry Pi OS to your Raspberry Pi (Raspbian) - YouTube](www.youtube.com)
3. [Raspberry Pi OS – Raspberry Pi](https://www.raspberrypi.org/)
4. [Operating system images – Raspberry Pi](https://www.homenethowto.com/)
5. [ARP, the link between MAC and IP - Homenet Howto](http://www.homenethowto.com)
6. [Could not communicate with wpa_supplicant, Pi 4 SSD usb boot - Raspberry Pi Forums](http://www.raspberrypi.org)
7. [[SOLVED] WIFI not working on USB SSD boot - Raspberry Pi Forums](http://www.raspberrypi.org)
8. [Setup WiFi on a Pi Manually using wpa_supplicant.conf - Raspberry Pi Spy](http://www.raspberrypi-spy.co.uk)
9. [Control Raspberry Pi Without Monitor. : 7 Steps - Instructable](https://www.instructables.com/)