import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [55.7610, 37.6095];
  private defaultIcon = new L.Icon({
    iconUrl: '../assets/images/vector/map-marker.svg',
    iconSize: [44, 60],
    iconAnchor: [22, 60],
    shadowUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==',
    shadowSize: [0, 0],

  })
  private hoverIcon = new L.Icon({
    iconUrl: '../assets/images/vector/map-marker-hover.svg',
    iconSize: [44, 60],
    iconAnchor: [22, 60],
    shadowUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==',
    shadowSize: [0, 0],
  })

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    })
    tiles.addTo(this.map);

    const marker = L.marker(this.centroid);
    marker.addTo(this.map).setIcon(this.defaultIcon).on("mouseover", () => {
      marker.setIcon(this.hoverIcon)
    }).on("mouseout", () => {
      marker.setIcon(this.defaultIcon)
    })
      .bindPopup('ул. Тверская 24', {offset: [0, -55]}).on('click', () => {
      marker.openPopup()
    })
  }
}
