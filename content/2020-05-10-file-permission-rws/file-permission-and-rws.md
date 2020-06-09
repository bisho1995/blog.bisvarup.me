---
title: File Permission and RWS
date: 2020-05-10
path: /file-permission-and-rws
tags: linux, file-permissions   
image:  wesley-tingey-snNHKZ-mGfE-unsplash.jpg
---

 

## File Permissions

| _ | rwx | rwx | rwx |
| - |:-:| :-:| :---: |
| 1 | 2  |  3 |  4 |
| File or directory _ or d | Owner's permission | Group's permission | All other users' permission |

## Details

|r|w|x|
|:-:|:-:|:-:|
|read (4)|write (2)|execute (1)|

so `777` means `rwx rwx rwx`

<br/>
<br/>

**Find Files**
```bash
find / -perm -400
```

<br/>

**Find all files with permission atleast 400**

Count number of results
```bash
find / -perm -400 | wc -l
```
wc -l => count number of lines
wc -w => count number of words

<br/>

**Discard Errors**

```bash
find / -perm -400 2>/dev/null | wc -l
```

2 means error responses, move them to `/dev/null`


rws
This means if the file has permissions to run as user1 and user2 has access to this file when user2 runs file will run as user1