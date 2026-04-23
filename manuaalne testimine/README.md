# Käsitsi testimise projekt

## Projekti eesmärk

Selle projekti eesmärk oli demonstreerida manuaalse tarkvaratestimise
põhiprintsiipe läbi struktureeritud testidokumentatsiooni loomise.

Projekt keskendub riskipõhisele testimisele, testjuhtumite disainile,
vearaportite koostamisele ning analüütilisele QA mõtlemisele.

---

## Testimise lähenemine

Kasutasin **riskipõhist testimise strateegiat**:

- esmalt testiti ohutuskriitilisi funktsioone
- seejärel põhifunktsionaalsust
- lisaks negatiivsed stsenaariumid ja piirjuhtumid

Eesmärk oli tuvastada vead, mille mõju kasutajale oleks kõige suurem.

---

## Projekti sisu

Projekt sisaldab järgmisi QA artefakte:

### Testjuhtumid
- funktsionaalsed testid
- ohutuse kontroll
- prioriteetide määramine
- oodatavad vs tegelikud tulemused

### Veaaruanne
- struktureeritud veaaruande tabel
- vea tõsidus ja prioriteet
- reproduktsiooni kirjeldus

### SQL ülesanne
Näide lihtsast andmebaasipäringust:

```sql
SELECT FirstName
FROM Employees
WHERE LastName LIKE '%er%';

Kontroll nimekirja testimine

Kodutermose testimise kontrollnimekiri:

paigaldus
elektriohutus
funktsionaalne kontroll
töövalmidus
Flowchart

Tööotsingu protsessi visualiseerimine vooskeemi abil.
